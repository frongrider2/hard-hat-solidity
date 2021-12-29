import { web3, artifacts, network, Web3 } from "hardhat";
import { lendingPool, wBNB } from "../../typechain";
import chai from "chai";
import { Contract } from "web3-eth-contract";

import { solidity } from "ethereum-waffle";
import { get_weth } from "./get_weth";

chai.use(solidity);
const { expect } = chai;

async function main() {
  let deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  if (network.live) {
    // await get_weth("0.001");
    const lending_Pool = await get_lengding_pool(deployer);
    // approve ERC 20
    const amount = web3.utils.toWei("0.001", "ether");
    await approve_erc20(amount, lending_Pool.options.address, wBNB, deployer);
    console.log("deposit");
    await lending_Pool.methods.deposit(wBNB, amount, deployer, 0).send({
      from: deployer,
    });
    console.log("deposit Done");
    await get_borrowable_data(lending_Pool, deployer);
    console.log("end");
  }
}

const get_borrowable_data = async (lengding_pool: Contract, address) => {
  let [total_collabteral, total_dept_eth, available_borrow_eth, current_liquidation_threshold, ltv, heal_factor] =
    await lengding_pool.methods.getUserAccountData(address).call({
      from: address,
    });
  available_borrow_eth = Web3.utils.fromWei(available_borrow_eth, "ether");
  total_collabteral = Web3.utils.fromWei(total_collabteral, "ether");
  total_dept_eth = Web3.utils.fromWei(total_dept_eth, "ether");

  console.log({ available_borrow_eth, total_collabteral, total_dept_eth });
};

const approve_erc20 = async (amount, spender, erc20_address, account) => {
  console.log("Approve , ERC20 token ...");
  const erc20 = new web3.eth.Contract((await artifacts.readArtifact("IERC20")).abi, erc20_address);
  const tx = await erc20.methods.approve(spender, amount).send({
    from: account,
  });
};

const get_lengding_pool = async (deployer) => {
  const lending_pool_addresses_provider = new web3.eth.Contract(
    (await artifacts.readArtifact("ILendingPoolAddressesProvider")).abi,
    lendingPool
  );
  const lending_pool_address = await lending_pool_addresses_provider.methods.getLendingPool().call({
    from: deployer,
  });
  const leding_pool = new web3.eth.Contract((await artifacts.readArtifact("ILendingPool")).abi, lending_pool_address);
  return leding_pool;
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
