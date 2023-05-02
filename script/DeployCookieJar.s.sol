// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import { Script } from "forge-std/Script.sol";
import { BaalCookieJar } from "../src/BaalCookieJar.sol";
import { ERC20CookieJar } from "../src/ERC20CookieJar.sol";
import { ERC721CookieJar } from "../src/ERC721CookieJar.sol";
import { ListCookieJar } from "../src/ListCookieJar.sol";
import { OpenCookieJar } from "../src/OpenCookieJar.sol";
import { CookieJarFactory } from "../src/SummonCookieJar.sol";
import { Create2 } from "@openzeppelin/contracts/utils/Create2.sol";

//import forge console
import { console } from "forge-std/console.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployCookieJar is Script {
    address internal deployer;
    address internal baalCookieJar;
    address internal erc20CookieJar;
    address internal erc721CookieJar;
    address internal listCookieJar;
    address internal openCookieJar;
    address internal summonCookieJar;

    function setUp() public virtual {
        string memory mnemonic = vm.envString("MNEMONIC");
        (deployer,) = deriveRememberKey(mnemonic, 0);
    }

    function run() public {
        vm.startBroadcast(deployer);

        baalCookieJar = address(new BaalCookieJar());
        erc20CookieJar = address(new ERC20CookieJar());
        erc721CookieJar = address(new ERC721CookieJar());
        listCookieJar = address(new ListCookieJar());
        openCookieJar = address(new OpenCookieJar());
        summonCookieJar = address(new CookieJarFactory());
        // solhint-disable quotes
        console.log('"baalCookieJar": "%s",', baalCookieJar);
        console.log('"erc20CookieJar": "%s",', erc20CookieJar);
        console.log('"erc721CookieJar": "%s",', erc721CookieJar);
        console.log('"listCookieJar": "%s",', listCookieJar);
        console.log('"openCookieJar": "%s",', openCookieJar);
        console.log('"summonCookieJar": "%s",', summonCookieJar);
        // solhint-enable quotes

        vm.stopBroadcast();
    }
}
