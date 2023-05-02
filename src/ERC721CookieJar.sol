// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import { CookieJar } from "./CookieJar.sol";

contract ERC721CookieJar is CookieJar {
    address public erc721Addr;

    function setUp(bytes memory _initializationParams) public override initializer {
        (,,,, address _erc721addr) = abi.decode(_initializationParams, (address, uint256, uint256, address, address));

        super.setUp(_initializationParams);
        erc721Addr = _erc721addr;
    }

    function isAllowList() internal view override returns (bool) {
        return IERC721(erc721Addr).balanceOf(msg.sender) > 0;
    }
}
