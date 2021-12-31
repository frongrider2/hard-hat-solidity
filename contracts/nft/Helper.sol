// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Helper {
  uint256 randnonce = 0;
  using SafeMath for uint256;

  function random(uint256 _modulus) internal returns (uint256) {
    randnonce = randnonce.add(1);
    return uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, randnonce))) % _modulus;
  }
}
