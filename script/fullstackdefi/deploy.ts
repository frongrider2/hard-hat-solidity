import { web3, artifacts, network, Web3, ethers } from "hardhat";

import { Contract } from "web3-eth-contract";

async function main() {
  let deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  // const LemontToken = await deploy(deployer, "LemonToken");
  console.log(Web3.utils.toWei("100000"));
}

const deploy = async (deployer, contract: string) => {
  const attifact = await artifacts.readArtifact(contract);
  const Contract = await new web3.eth.Contract(attifact.abi)
    .deploy({
      data: attifact.bytecode,
      arguments: [Web3.utils.toWei("100000")],
    })
    .send({
      from: deployer,
    });
  return Contract;
};

const getCotract = async (contract: string, address: string) => {
  const Contract = new web3.eth.Contract((await artifacts.readArtifact("IWbnb")).abi, address);
  return Contract;
};

main();
