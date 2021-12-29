import chai from "chai";
import { ethers, waffle } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { solidity } from "ethereum-waffle";

chai.use(solidity);
const { expect } = chai;

describe("Lottery", () => {
  let Lottery: any, lottery: any, deployer: SignerWithAddress, alice: SignerWithAddress, bob: SignerWithAddress;
  beforeEach(async () => {
    Lottery = await ethers.getContractFactory("Lottery");
    lottery = await Lottery.deploy("0x0567f2323251f0aab15c8dfb1967e4e8a7d42aee");
    [deployer, alice, bob] = await ethers.getSigners();
  });

  describe("Test to deploy", () => {
    it("get getEntrancFee", async () => {});
  });
});
