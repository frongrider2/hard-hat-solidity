// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TestPresale is Ownable {
  using SafeERC20 for IERC20;
  using Address for address;

  using SafeMath for uint256;

  IERC20 public token;
  AggregatorV3Interface public priceFeed;
  uint8 public priceFeed_Dec;
  uint256 public startTimeStamp;
  uint256 public endTimeStamp;
  uint256 public tokenPerUSD;
  uint256 public maxBnb;

  // rate limit , allow 1 address per 1 block;
  mapping(address => uint256) public buyAmount;
  mapping(address => mapping(uint256 => bool)) rateLimit;

  constructor(
    IERC20 _token,
    AggregatorV3Interface _pricFeed,
    uint8 _pricFeed_Dec,
    uint256 _startTimeStamp,
    uint256 _endTimeStamp,
    uint256 _tokenPerUSD,
    uint256 _maxBnb
  ) {
    token = _token;
    priceFeed = _pricFeed;
    priceFeed_Dec = _pricFeed_Dec;
    startTimeStamp = _startTimeStamp;
    endTimeStamp = _endTimeStamp;
    tokenPerUSD = _tokenPerUSD;
    maxBnb = _maxBnb;
  }

  // buy testToken Presale
  function buy() external payable {
    require(block.timestamp >= startTimeStamp, "not start");
    require(block.timestamp < endTimeStamp, "end");
    require(!_msgSender().isContract(), "nope address");
    require(!rateLimit[_msgSender()][block.number], "block prevent");

    // set block prevent rate limit
    rateLimit[_msgSender()][block.number] = true;
    require(msg.value > 0, "zero input");

    buyAmount[_msgSender()] = buyAmount[_msgSender()].add(msg.value);
    uint256 value = calculateAmount(msg.value);
    token.safeTransfer(_msgSender(), value);

    // payable(owner()).transfer(address(this).balance);
  }

  function calculateAmount(uint256 _amount) public view returns (uint256) {
    require(_amount >= 0.1 ether && buyAmount[msg.sender] + _amount <= maxBnb, "not allow");

    // return wei
    uint256 USDperBNB = getBNBUSD();
    return (((_amount) * USDperBNB)) / (tokenPerUSD);
  }

  function getBNBUSD() public view returns (uint256) {
    (, int256 price, , , ) = priceFeed.latestRoundData();
    return uint256(price);
  }

  function availableTokens() public view returns (uint256) {
    return token.balanceOf(address(this));
  }

  function getBNB() public view returns (uint256) {
    return address(this).balance;
  }

  function getToken() public view returns (uint256) {
    return token.balanceOf(address(this));
  }

  function withdrawAll() external onlyOwner {
    payable(owner()).transfer(address(this).balance);
    uint256 available = token.balanceOf(address(this));
    if (available > 0) {
      // token.transfer(owner(), available);
      token.transfer(_msgSender(), available);
    }
  }
}
