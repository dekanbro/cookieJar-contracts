// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { CookieJar } from "./CookieJar.sol";

contract ERC20CookieJar is CookieJar {
    address public erc20Addr;
    uint256 public threshold;

    function setUp(bytes memory _initializationParams) public override initializer {
        super.setUp(_initializationParams);

        (,,,, address _erc20addr, uint256 _threshold) =
            abi.decode(_initializationParams, (address, uint256, uint256, address, address, uint256));

        erc20Addr = _erc20addr;
        threshold = _threshold;
    }

    function isAllowList() internal view override returns (bool) {
        return IERC20(erc20Addr).balanceOf(msg.sender) >= threshold;
    }
}
