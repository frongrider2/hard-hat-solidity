import { web3, artifacts } from "hardhat";
import { wBNB } from "../../typechain";
import chai from "chai";

import { solidity } from "ethereum-waffle";

chai.use(solidity);
const { expect } = chai;

async function main() {
  await get_weth("0.00001");
}

export const get_weth = async (amount: string) => {
  let OurToken: any, ourToken: any, deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  const WBnb = new web3.eth.Contract((await artifacts.readArtifact("IWbnb")).abi, wBNB);
  const tx = await WBnb.methods.deposit().send({
    from: deployer,
    value: web3.utils.toWei(amount, "ether"),
  });
  console.log(tx);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
