import { network } from "hardhat";

interface netWorkInterface {
  [key: string]: string;
}

const networkName: string = network.name;

const wBNBAddress: netWorkInterface = {
  hardhat: "1",
  testnet: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  mainnet: "3",
  mainnetfork: "4",
  kovan: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
};

const lendingPoolAddress: netWorkInterface = {
  hardhat: "1",
  testnet: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  mainnet: "3",
  mainnetfork: "4",
  kovan: "0x88757f2f99175387ab4c6a4b3067c77a695b0349",
};

const daiAddress: netWorkInterface = {
  hardhat: "1",
  testnet: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  mainnet: "3",
  mainnetfork: "4",
  kovan: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
};

const daiPriceFeedAddress: netWorkInterface = {
  hardhat: "1",
  testnet: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  mainnet: "3",
  mainnetfork: "4",
  kovan: "0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541",
};

export const wBNB = wBNBAddress[networkName];
export const lendingPool = lendingPoolAddress[networkName];
export const daiPriceFeed = daiPriceFeedAddress[networkName];
export const dai = daiAddress[networkName];
