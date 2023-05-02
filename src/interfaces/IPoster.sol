//SPDX-License-Identifier: MIT
pragma solidity >=0.8.19 <0.9.0;

interface IPoster {
    function post(string calldata content, string calldata tag) external;
}
