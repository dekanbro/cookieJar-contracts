// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19 <0.9.0;

import { PRBTest } from "@prb/test/PRBTest.sol";
import { StdCheats } from "forge-std/StdCheats.sol";
import { CookieJar } from "src/CookieJar.sol";
import { TestAvatar } from "@gnosis.pm/zodiac/contracts/test/TestAvatar.sol";
import { ERC20Mintable } from "test/utils/ERC20Mintable.sol";
import { IPoster } from "src/interfaces/IPoster.sol";

contract CookieJarHarnass is CookieJar {
    constructor(bytes memory initParams) {
        super.setUp(initParams);
        posterTag = "poster.test";
    }

    function exposed_isAllowList() external view returns (bool) {
        return isAllowList();
    }
}

contract CookieJarTest is PRBTest, StdCheats {
    address internal alice = makeAddr("alice");
    address internal bob = makeAddr("bob");
    address internal molochDAO = vm.addr(666);

    CookieJarHarnass internal cookieJar;
    ERC20Mintable internal cookieToken = new ERC20Mintable("Mock", "MCK");
    TestAvatar internal testAvatar = new TestAvatar();

    uint256 internal cookieAmount = 2e6;

    string internal reason = "CookieJar: Testing";

    event Setup(bytes initializationParams);
    event GiveCookie(address cookieMonster, uint256 amount, uint256 fee);
    event NewPost(address indexed user, string content, string indexed tag);

    function setUp() public virtual {
        // address _safeTarget,
        // uint256 _periodLength,
        // uint256 _cookieAmount,
        // address _cookieToken
        bytes memory initParams = abi.encode(address(testAvatar), 3600, cookieAmount, address(cookieToken));

        cookieJar = new CookieJarHarnass(initParams);

        // Enable module
        testAvatar.enableModule(address(cookieJar));

        vm.mockCall(0x000000000000cd17345801aa8147b8D3950260FF, abi.encodeWithSelector(IPoster.post.selector), "");
    }

    function testIsEnabledModule() external {
        assertEq(address(testAvatar), cookieJar.avatar());
        assertEq(address(testAvatar), cookieJar.target());
        assertTrue(testAvatar.isModuleEnabled(address(cookieJar)));
    }

    function testIsAllowList() external {
        assertTrue(cookieJar.exposed_isAllowList());
    }

    function testCanClaim() external {
        assertTrue(cookieJar.canClaim());
    }

    function testReachInJar() external {
        // No balance so expect fail
        vm.expectRevert(bytes("call failure setup"));
        cookieJar.reachInJar(reason);

        // Put cookie tokens in jar

        cookieToken.mint(address(testAvatar), cookieAmount);

        // Alice puts her hand in the jar
        vm.startPrank(alice);
        assertTrue(cookieJar.canClaim());
        vm.expectEmit(true, true, false, true);
        emit GiveCookie(alice, cookieAmount, cookieAmount / 100);
        cookieJar.reachInJar(reason);
        assertFalse(cookieJar.canClaim());
    }

    function testAssessReason() external {
        vm.startPrank(alice);
        string memory uid = "testEmit";

        vm.expectCall(
            0x000000000000cd17345801aa8147b8D3950260FF, abi.encodeCall(IPoster.post, ("UP", "poster.test.testEmit"))
        );
        cookieJar.assessReason(uid, true);

        vm.expectCall(
            0x000000000000cd17345801aa8147b8D3950260FF, abi.encodeCall(IPoster.post, ("DOWN", "poster.test.testEmit"))
        );
        cookieJar.assessReason(uid, false);
    }

    function testGiveAwayCookie() external {
        // Put cookie tokens in jar
        cookieToken.mint(address(testAvatar), cookieAmount);

        // Alice puts her hand in the jar
        vm.startPrank(alice);
        assertTrue(cookieJar.canClaim());
        vm.expectEmit(true, true, false, true);
        emit GiveCookie(bob, cookieAmount, cookieAmount / 100);
        cookieJar.reachInJar(bob, reason);
        assertFalse(cookieJar.canClaim());
    }
}
