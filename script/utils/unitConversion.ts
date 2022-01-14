import BigNumber from "bignumber.js";

const E18 = new BigNumber(10).pow(18);

export function fromWei(wei, decimals = 18) {
  return new BigNumber(wei).div(new BigNumber(10).pow(decimals)).toNumber();
}

export function toWei(ether, decimals = 18) {
  return new BigNumber(ether).multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);
}
