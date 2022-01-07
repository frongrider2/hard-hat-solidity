// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract BoxV2 {
  uint256 private value;
  event ValueChange(uint256 newValue);

  function store(uint256 newValue) public {
    value = newValue;
    emit ValueChange(newValue);
  }

  function retrieve() public view returns (uint256) {
    return value;
  }

  function increment() public returns (uint256) {
    value = value + 1;
    emit ValueChange(value);
    return value;
  }
}
