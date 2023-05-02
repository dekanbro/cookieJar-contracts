//SPDX-License-Identifier: MIT
pragma solidity >=0.8.19 <0.9.0;

interface IBaal {
    function lootToken() external view returns (address);
    function sharesToken() external view returns (address);
    function target() external view returns (address);
}
