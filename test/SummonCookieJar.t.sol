// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { PRBTest } from "@prb/test/PRBTest.sol";
import { console2 } from "forge-std/console2.sol";
import { StdCheats } from "forge-std/StdCheats.sol";

import { CookieJarFactory } from "src/SummonCookieJar.sol";
import { BaalCookieJar } from "src/BaalCookieJar.sol";
import { ERC20CookieJar } from "src/ERC20CookieJar.sol";
import { ERC721CookieJar } from "src/ERC721CookieJar.sol";
import { ListCookieJar } from "src/ListCookieJar.sol";
import { OpenCookieJar } from "src/OpenCookieJar.sol";

contract SummonCookieJarTest is PRBTest, StdCheats {
    CookieJarFactory public cookieJarFactory = new CookieJarFactory();
    address internal _safeTarget = makeAddr("safe");
    address internal _mockERC20 = makeAddr("erc20");
    address internal _mockERC721 = makeAddr("erc721");
    uint256 internal _cookieAmount = 2e6;
    uint256 internal _periodLength = 3600;
    address internal _cookieToken = makeAddr("cookieToken");
    address internal _dao = makeAddr("dao");
    uint256 internal _threshold = 1;
    bool internal _useShares = true;
    bool internal _useLoot = true;

    event SummonCookieJar(address cookieJar, string jarType, bytes initializer);

    function testSummonBaalCookieJar() public {
        BaalCookieJar baalCookieJar = new BaalCookieJar();
        bytes memory _initializer =
            abi.encode("safe", _periodLength, _cookieAmount, "cookieToken", "dao", _threshold, _useShares, _useLoot);

        // Only check is event emits, not the values
        vm.expectEmit(false, false, false, false);
        emit SummonCookieJar(address(baalCookieJar), "Baal", _initializer);

        cookieJarFactory.summonCookieJar("Baal", address(baalCookieJar), _initializer);
    }

    function testSummonERC20CookieJar() public {
        ERC20CookieJar erc20CookieJar = new ERC20CookieJar();
        /*solhint-disable max-line-length*/
        bytes memory _initializer = abi.encode("safe", _periodLength, _cookieAmount, "cookieToken", "erc20", _threshold);

        // Only check is event emits, not the values
        vm.expectEmit(false, false, false, false);
        emit SummonCookieJar(address(erc20CookieJar), "ERC20", _initializer);
        cookieJarFactory.summonCookieJar("ERC20", address(erc20CookieJar), _initializer);
    }

    function testSummonERC721CookieJar() public {
        ERC721CookieJar erc721CookieJar = new ERC721CookieJar();
        bytes memory _initializer = abi.encode("safe", _periodLength, _cookieAmount, "cookieToken", "erc721");

        // Only check is event emits, not the values
        vm.expectEmit(false, false, false, false);
        emit SummonCookieJar(address(erc721CookieJar), "ERC721", _initializer);
        cookieJarFactory.summonCookieJar("ERC721", address(erc721CookieJar), _initializer);
    }

    function testSummonListCookieJar() public {
        ListCookieJar listCookieJar = new ListCookieJar();
        address[] memory _list = new address[](2);

        _list[0] = makeAddr("alice");
        _list[1] = makeAddr("bob");
        bytes memory _initializer = abi.encode("safe", _periodLength, _cookieAmount, "cookieToken", _list);

        // Only check is event emits, not the values
        vm.expectEmit(false, false, false, false);
        emit SummonCookieJar(address(listCookieJar), "List", _initializer);
        cookieJarFactory.summonCookieJar("List", address(listCookieJar), _initializer);
    }

    function testSummonOpenCookieJar() public {
        OpenCookieJar openCookieJar = new OpenCookieJar();
        bytes memory _initializer = abi.encode("safe", _periodLength, _cookieAmount, "cookieToken");

        // Only check is event emits, not the values
        vm.expectEmit(false, false, false, false);
        emit SummonCookieJar(address(openCookieJar), "Open", _initializer);
        cookieJarFactory.summonCookieJar("Open", address(openCookieJar), _initializer);
    }
}
