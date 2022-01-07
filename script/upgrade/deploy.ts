import { web3, artifacts, network, Web3 } from "hardhat";

import { Contract } from "web3-eth-contract";

async function main() {
  let deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  const Box = await deploy("Box");
  let value = await Box.methods.retrieve().call({
    from: deployer,
  });
  console.log("value0", value);
  await Box.methods.store(1).send({
    from: deployer,
  });
  value = await Box.methods.retrieve().call({
    from: deployer,
  });
  console.log("value1", value);
  const Proxy = await deploy("ProxyAdmin");
}

const deploy = async (contract: string) => {
  let deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  const attifact = await artifacts.readArtifact(contract);
  const Contract = await new web3.eth.Contract(attifact.abi)
    .deploy({
      data: attifact.bytecode,
    })
    .send({
      from: deployer,
    });
  return Contract;
};

main();
