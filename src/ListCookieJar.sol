// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { CookieJar } from "./CookieJar.sol";

contract ListCookieJar is CookieJar {
    address public safeTarget;
    mapping(address allowed => bool exists) public allowList;

    function setUp(bytes memory _initializationParams) public override initializer {
        super.setUp(_initializationParams);

        (,,,, address[] memory _allowList) =
            abi.decode(_initializationParams, (address, uint256, uint256, address, address[]));

        for (uint256 i = 0; i < _allowList.length; i++) {
            allowList[_allowList[i]] = true;
        }
    }

    function isAllowList() internal view override returns (bool) {
        return allowList[msg.sender];
    }
}
