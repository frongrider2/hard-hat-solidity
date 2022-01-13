import { useMemo } from "react";

import useActiveWeb3React from "hooks/useActiveWeb3React";
import { getPresaleContract } from "utils/contractHelpers";
import { Contract } from "@ethersproject/contracts";
import { getContract } from "utils";
import presaleABI from "config/abi/TestPresale.json";
import { getPresaleAddress, getPresaleToenAddress } from "utils/addressHelper";
import { ERC20_ABI } from "config/abi/erc20";

// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export const usePresaleContract = (withSigner = true) => {
  return useContract(getPresaleAddress(), presaleABI.abi, withSigner);
};

export const usePresaleTokenContract = (withSigner = true) => {
  return useContract(getPresaleToenAddress(), ERC20_ABI, withSigner);
};

export const usePresaleContract2 = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getPresaleContract(library), [library]);
};
