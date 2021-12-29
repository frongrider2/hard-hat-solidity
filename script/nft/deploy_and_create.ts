import { web3, artifacts } from "hardhat";
import chai from "chai";

import { solidity } from "ethereum-waffle";

chai.use(solidity);

const uri = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json";

async function main() {
  // await deploy();
  console.log("start mint");
  let deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  console.log(deployer);
  const simpleCollectible = await get_simpleCollectible("0x6a0aB52087B9E033aA2F55a292F0c902B92b7dbc");
  const token = await simpleCollectible.methods.createCollect(deployer, uri).send({
    from: deployer,
  });
  console.log("create dog success");
}

const deploy = async () => {
  let deployer: string, alice: string, bob: string;
  [deployer, alice, bob] = await web3.eth.getAccounts();
  const attifact = await artifacts.readArtifact("SimpleCollectible");
  const SimpleCollectible = await new web3.eth.Contract(attifact.abi)
    .deploy({
      data: attifact.bytecode,
    })
    .send({
      from: deployer,
    });

  console.log(SimpleCollectible.options.address);
};

const get_simpleCollectible = async (address) => {
  const simpleCollectible = new web3.eth.Contract((await artifacts.readArtifact("SimpleCollectible")).abi, address);
  return simpleCollectible;
};

main();
