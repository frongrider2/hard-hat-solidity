import chai from "chai";
import { ethers, waffle } from "hardhat";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { solidity } from "ethereum-waffle";
import { wBNB } from "../typechain";

chai.use(solidity);
const { expect } = chai;

describe("TokenBasic", () => {
  let Token: any, token: any, deployer: SignerWithAddress, alice: SignerWithAddress, bob: SignerWithAddress;
  beforeEach(async () => {
    Token = await ethers.getContractFactory("TokenBasic");
    token = await Token.deploy();
    [deployer, alice, bob] = await ethers.getSigners();
  });

  describe("Deployment", () => {
    it("Should set the right owner", async () => {
      expect(await token.owner()).to.equal(deployer.address);
      console.log(wBNB);
    });

    it("should assign the total supply of token to the owner", async () => {
      const ownerBalance = await token.balanceOf(deployer.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", () => {
    it("Should transfer to tokens between accounts", async () => {
      await token.transfer(alice.address, 50);
      const aliceBalance = await token.balanceOf(alice.address);
      expect(aliceBalance).to.equal("50");
      await token.connect(alice).transfer(bob.address, "50");
      const bobBalance = await token.balanceOf(bob.address);
      expect(bobBalance).to.equal("50");
    });

    it("Should be failed if sender doesn't have token", async () => {
      const initialBalance = await token.balanceOf(deployer.address);
      await expect(token.connect(alice).transfer(deployer.address, 1)).to.be.revertedWith("Not enough tokens");
      expect(await token.balanceOf(deployer.address)).to.equal(initialBalance);
    });

    it("Should update balance after transfer", async () => {
      const initialBalance = await token.balanceOf(deployer.address);
      await token.transfer(bob.address, 100);
      expect(await token.balanceOf(deployer.address)).to.equal(initialBalance - 100);
    });
  });
});
