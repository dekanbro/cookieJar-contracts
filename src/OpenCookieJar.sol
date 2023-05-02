// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { CookieJar } from "./CookieJar.sol";

contract OpenCookieJar is CookieJar {
    function setUp(bytes memory _initializationParams) public virtual override initializer {
        super.setUp(_initializationParams);

    }

    function isAllowList() internal pure override returns (bool) {
        return true;
    }
}
