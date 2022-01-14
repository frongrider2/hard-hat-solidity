import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { fromWei, toWei } from "../utils/unitConversion";

const main = async () => {
  let deployer: SignerWithAddress, alice: SignerWithAddress, bob: SignerWithAddress;
  [deployer, alice, bob] = await ethers.getSigners();

  const PresaleToken = await deploy("TestPresaleToken", deployer);
  console.log("PresaleToken Deploy success ", PresaleToken.address);

  // minting
  await PresaleToken.setAllowMint(deployer.address, true);
  console.log("setAllowMint success");
  await PresaleToken.setDailyLimit(deployer.address, toWei("1000000").toString());
  console.log("setDailyLimit success");
  await PresaleToken.mintPresale(deployer.address, toWei("1000000").toString());
  console.log("Mint success");

  const time = (Date.now() / 1000).toFixed(0);

  const timeEnd = (Date.now() / 1000 + 24 * 5 * 60 * 60).toFixed(0);

  console.log(time, timeEnd);

  const PreSaleContract = await deploy(
    "TestPresale",
    deployer,
    PresaleToken.address,
    "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526",
    "8",
    time,
    timeEnd,
    "100000000",
    "1000000000000000000"
  );

  await PresaleToken.transfer(PreSaleContract.address, toWei("1000000").toString(), {
    gasPrice: "10000000000",
  });

  console.log("Presale Contract ", PreSaleContract.address);
};

const deploy = async (contract: string, account: SignerWithAddress, ...arg: any) => {
  const contractDeploy = await ethers.getContractFactory(contract);
  contractDeploy.connect(account);
  const con = await contractDeploy.deploy(...arg);
  return con;
};

main();
