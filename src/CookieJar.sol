// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { Module } from "@gnosis.pm/zodiac/contracts/core/Module.sol";
import { Enum } from "@gnosis.pm/safe-contracts/contracts/common/Enum.sol";

import { IPoster } from "./interfaces/IPoster.sol";

abstract contract CookieJar is Module {
    uint256 public constant PERC_POINTS = 1e6;
    string public constant POSTER_TAG = "CookieJar";
    uint256 public constant SUSTAINABILITY_FEE = 10_000; // 1%
    address public constant POSTER_ADDR = 0x000000000000cd17345801aa8147b8D3950260FF;
    address public constant SUSTAINABILITY_ADDR = 0x4A9a27d614a74Ee5524909cA27bdBcBB7eD3b315;
    uint256 public cookieAmount;
    address public cookieToken;
    uint256 public periodLength;

    mapping(address claimer => uint256 dateTime) public claims;

    event Setup(bytes initializationParams);
    event GiveCookie(address cookieMonster, uint256 amount, uint256 fee);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function setUp(bytes memory _initializationParams) public virtual override {
        (address _safeTarget, uint256 _periodLength, uint256 _cookieAmount, address _cookieToken) =
            abi.decode(_initializationParams, (address, uint256, uint256, address));

        // Module setup
        avatar = _safeTarget;
        target = _safeTarget;

        // Cookie jar setup
        require(_cookieAmount > PERC_POINTS, "amount too low");
        
        periodLength = _periodLength;
        cookieAmount = _cookieAmount;
        cookieToken = _cookieToken;

        emit Setup(_initializationParams);
    }

    function reachInJar(string calldata _reason) public {
        require(isAllowList(), "not a member");
        require(isValidClaimPeriod(), "not a valid claim period");

        claims[msg.sender] = block.timestamp;
        giveCookie(msg.sender, cookieAmount);
        postReason(_reason);
    }

    function reachInJar(address cookieMonster, string calldata _reason) public {
        require(isAllowList(), "not a member");
        require(isValidClaimPeriod(), "not a valid claim period");

        claims[msg.sender] = block.timestamp;
        giveCookie(cookieMonster, cookieAmount);
        postReason(_reason);
    }

    function giveCookie(address cookieMonster, uint256 amount) private {
        uint256 fee = (amount / PERC_POINTS) * SUSTAINABILITY_FEE;
        // module exec

        if (cookieToken == address(0)) {
            require(exec(SUSTAINABILITY_ADDR, fee, bytes(""), Enum.Operation.Call), "call failure setup");
            require(exec(cookieMonster, amount - fee, bytes(""), Enum.Operation.Call), "call failure setup");
        } else {
            require(
                exec(
                    cookieToken,
                    0,
                    abi.encodeWithSignature("transfer(address,uint256)", abi.encodePacked(SUSTAINABILITY_ADDR, fee)),
                    Enum.Operation.Call
                ),
                "call failure setup"
            );

            require(
                exec(
                    cookieToken,
                    0,
                    abi.encodeWithSignature("transfer(address,uint256)", abi.encodePacked(cookieMonster, amount - fee)),
                    Enum.Operation.Call
                ),
                "call failure setup"
            );
        }
        emit GiveCookie(cookieMonster, amount, fee);
    }

    function postReason(string calldata _reason) internal {
        bytes32 uid = keccak256(abi.encodePacked(address(this), msg.sender, block.timestamp, _reason));
        IPoster(POSTER_ADDR).post(
            _reason, string.concat(POSTER_TAG, " ", bytes32ToString(uid))
        );
    }

    function assessReason(string calldata _uid, bool _isGood) public {
        require(isAllowList(), "not a member");
        string memory tag = string.concat(POSTER_TAG, ".reaction");
        if (_isGood) {
            IPoster(POSTER_ADDR).post(string.concat(_uid, " UP ", msg.sender), tag);
        } else {
            IPoster(POSTER_ADDR).post(string.concat(_uid, " DOWN ", msg.sender), tag);
        }
    }

    function canClaim() public view returns (bool allowed) {
        return isAllowList() && isValidClaimPeriod();
    }

    function isAllowList() internal view virtual returns (bool) {
        return true;
    }

    function isValidClaimPeriod() internal view returns (bool) {
        return block.timestamp - claims[msg.sender] >= periodLength || claims[msg.sender] == 0;
    }

    function bytes32ToString(bytes32 _b) private pure returns (string memory) {
        return string(abi.encodePacked(_b));
    }
}
