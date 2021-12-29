import chai from "chai";
import { ethers, waffle } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { solidity } from "ethereum-waffle";

chai.use(solidity);
const { expect } = chai;

describe("OurToken", () => {
  let OurToken: any, ourToken: any, deployer: SignerWithAddress, alice: SignerWithAddress, bob: SignerWithAddress;
  beforeEach(async () => {
    OurToken = await ethers.getContractFactory("GLDToken");
    ourToken = await OurToken.deploy(ethers.utils.parseEther("10000"));
    [deployer, alice, bob] = await ethers.getSigners();
  });

  describe("Test to deploy", () => {
    it("get getEntrancFee", async () => {
      console.log(await ourToken.address);
    });
  });
});
