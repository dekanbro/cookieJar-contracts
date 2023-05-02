// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19 <0.9.0;

import { Test, Vm } from "forge-std/Test.sol";
import { CookieJarFactory } from "src/SummonCookieJar.sol";
import { BaalCookieJarHarnass } from "test/BaalCookieJar.t.sol";
import { ERC20CookieJar } from "src/ERC20CookieJar.sol";
import { ERC721CookieJar } from "src/ERC721CookieJar.sol";
import { ListCookieJar } from "src/ListCookieJar.sol";
import { OpenCookieJar } from "src/OpenCookieJar.sol";

contract ERC20CookieJarHarnass is ERC20CookieJar {
    function exposed_isAllowList() external view returns (bool) {
        return isAllowList();
    }
}

contract ERC721CookieJarHarnass is ERC721CookieJar {
    function exposed_isAllowList() external view returns (bool) {
        return isAllowList();
    }
}

contract ListCookieJarHarnass is ListCookieJar {
    function exposed_isAllowList() external view returns (bool) {
        return isAllowList();
    }
}

contract OpenCookieJarHarnass is OpenCookieJar {
    function exposed_isAllowList() external pure returns (bool) {
        return isAllowList();
    }
}

contract CloneSummoner is Test {
    CookieJarFactory public cookieJarFactory = new CookieJarFactory();
    BaalCookieJarHarnass internal baalCookieJarImplementation = new BaalCookieJarHarnass();
    ERC20CookieJarHarnass internal erc20CookieJarImplementation = new ERC20CookieJarHarnass();
    ERC721CookieJarHarnass internal erc721CookieJarImplementation = new ERC721CookieJarHarnass();
    ListCookieJarHarnass internal listCookieJarImplementation = new ListCookieJarHarnass();
    OpenCookieJarHarnass internal openCookieJarImplementation = new OpenCookieJarHarnass();

    event SummonCookieJar(address cookieJar, string _cookieType, bytes initParams);

    function getBaalCookieJar(bytes memory initParams) public returns (BaalCookieJarHarnass) {
        vm.recordLogs();
        cookieJarFactory.summonCookieJar("Baal", address(baalCookieJarImplementation), initParams);

        Vm.Log[] memory entries = vm.getRecordedLogs();
        assertEq(entries.length, 3);
        assertEq(entries[2].topics[0], keccak256("SummonCookieJar(address,string,bytes)"));
        return BaalCookieJarHarnass(abi.decode(entries[2].data, (address)));
    }

    function getERC20CookieJar(bytes memory initParams) public returns (ERC20CookieJarHarnass) {
        vm.recordLogs();
        cookieJarFactory.summonCookieJar("ERC20", address(erc20CookieJarImplementation), initParams);

        Vm.Log[] memory entries = vm.getRecordedLogs();
        assertEq(entries.length, 3);
        assertEq(entries[2].topics[0], keccak256("SummonCookieJar(address,string,bytes)"));
        return ERC20CookieJarHarnass(abi.decode(entries[2].data, (address)));
    }

    function getERC721CookieJar(bytes memory initParams) public returns (ERC721CookieJarHarnass) {
        vm.recordLogs();
        cookieJarFactory.summonCookieJar("ERC721", address(erc721CookieJarImplementation), initParams);

        Vm.Log[] memory entries = vm.getRecordedLogs();
        assertEq(entries.length, 3);
        assertEq(entries[2].topics[0], keccak256("SummonCookieJar(address,string,bytes)"));
        return ERC721CookieJarHarnass(abi.decode(entries[2].data, (address)));
    }

    function getListCookieJar(bytes memory initParams) public returns (ListCookieJarHarnass) {
        vm.recordLogs();
        cookieJarFactory.summonCookieJar("List", address(listCookieJarImplementation), initParams);

        Vm.Log[] memory entries = vm.getRecordedLogs();
        assertEq(entries.length, 3);
        assertEq(entries[2].topics[0], keccak256("SummonCookieJar(address,string,bytes)"));
        return ListCookieJarHarnass(abi.decode(entries[2].data, (address)));
    }

    function getOpenCookieJar(bytes memory initParams) public returns (OpenCookieJarHarnass) {
        vm.recordLogs();
        cookieJarFactory.summonCookieJar("Open", address(openCookieJarImplementation), initParams);

        Vm.Log[] memory entries = vm.getRecordedLogs();
        assertEq(entries.length, 3);
        assertEq(entries[2].topics[0], keccak256("SummonCookieJar(address,string,bytes)"));
        return OpenCookieJarHarnass(abi.decode(entries[2].data, (address)));
    }
}
