// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import { Clones } from "@openzeppelin/contracts/proxy/Clones.sol";

import { CookieJar } from "./CookieJar.sol";

contract CookieJarFactory {
    event SummonCookieJar(address cookieJar, string jarType, bytes initializer);

    /*solhint-disable no-empty-blocks*/
    constructor() { }

    /*
        BaalCookieJar
        bytes memory _initializer = abi.encode(
            _safeTarget,
            uint256 _cookieAmount, 
            uint256 _periodLength,
            address _cookieToken,
            _dao,
            _threshold,
            _useShares,
            _useLoot);
        Erc20CookieJar
        bytes memory _initializer = abi.encode(
            _safeTarget,
            uint256 _cookieAmount, 
            uint256 _periodLength,
            address _cookieToken,
            _erc20Addr,
            _threshold);
        Erc721
        bytes memory _initializer = abi.encode(
            _safeTarget,
            uint256 _cookieAmount, 
            uint256 _periodLength,
            address _cookieToken,
            _erc721Addr);
        listCookieJar
        bytes memory _initializer = abi.encode(
            _safeTarget, 
            uint256 _cookieAmount, 
            uint256 _periodLength,
            address _cookieToken,
            _allowedAddresses);
        OpenCookieJar
        bytes memory _initializer = abi.encode(
            _safeTarget,
            uint256 _cookieAmount, 
            uint256 _periodLength,
            address _cookieToken,);
    */

    /*
        // example encode
        // open jar
        var abiCoder = ethers.utils.defaultAbiCoder;
        abiCoder.encode(["address","uint256","uint256","address"],
        ["0x4A9a27d614a74Ee5524909cA27bdBcBB7eD3b315",
        "100000000000000000",
        "3600",
        "0x4A9a27d614a74Ee5524909cA27bdBcBB7eD3b315"])
    */

    function summonCookieJar(string memory details, address _singleton, bytes memory _initializer) public {
        CookieJar _cookieJar = CookieJar(Clones.clone(_singleton));
        _cookieJar.setUp(_initializer);

        emit SummonCookieJar(address(_cookieJar), details, _initializer);
    }
}
