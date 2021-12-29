// SPDX-License-Identifier: MIT

// 1. Users can enter lottery with BNB based on USD fee
// 2. An admin will choose when the lottery is over
// 3. The lotterry will random the winner 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE

pragma solidity >=0.8.0 <=0.8.12;

// import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "hardhat/console.sol";

contract Lottery {
  address[] public players;
  uint256 public usdEntryFee;
  AggregatorV3Interface internal bnbUsdPriceFeed;

  constructor(address _agregrate) {
    usdEntryFee = 50 * (10**18);
    bnbUsdPriceFeed = AggregatorV3Interface(_agregrate);
  }

  function enter() public payable {
    // Base on BNB price
    players.push(msg.sender);
  }

  function getEntrancFee() public view returns (int256) {
    (, int256 price, , , ) = bnbUsdPriceFeed.latestRoundData();
    return price;
  }

  function getusdEntryFee() public view returns (uint256) {
    return usdEntryFee;
  }
}
