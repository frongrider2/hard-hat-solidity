import { ethers } from "ethers";
import { simpleRpcProvider } from "./providers";

import presaleABI from "config/abi/TestPresale.json";
import MultiCallAbi from "config/abi/Multicall.json";
import ERC20_ABI from "config/abi/erc20.json";
import { getMulticallAddress, getPresaleAddress } from "./addressHelper";

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getPresaleContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(presaleABI.abi, getPresaleAddress(), signer);
};

export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer);
};

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(ERC20_ABI, address, signer);
};
