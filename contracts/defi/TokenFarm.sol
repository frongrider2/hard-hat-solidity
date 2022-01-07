// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TokenFarm is Ownable {
  // statement
  address[] public allowedTokens;
  mapping(address => mapping(address => uint256)) public stakingBalance;
  mapping(address => uint256) public uniqueTokensStaked;
  address[] public stakers;
  IERC20 public lemonToken;
  mapping(address => address) public tokenPriceFeedMapping;

  using SafeMath for uint256;

  constructor(address _lemonToken) {
    lemonToken = IERC20(_lemonToken);
  }

  function issueToken() public onlyOwner {
    // Issue tokens to all stakers
    for (uint256 stakersIndex = 0; stakersIndex < stakers.length; stakersIndex++) {
      address recipient = stakers[stakersIndex];
      uint256 userTotalValue = getUserTotalValue(recipient);
      lemonToken.transfer(recipient, userTotalValue);
    }
  }

  function setPriceFeedContract(address _token, address _priceFeed) public onlyOwner {
    tokenPriceFeedMapping[_token] = _priceFeed;
  }

  function getUserTotalValue(address _user) public view haveStaked(_user) returns (uint256) {
    uint256 totalValue = 0;
    for (uint256 allowedTokensIndex = 0; allowedTokensIndex < allowedTokens.length; allowedTokensIndex++) {
      totalValue = totalValue + getUserSingleTokenValue(_user, allowedTokens[allowedTokensIndex]);
    }
    return totalValue;
  }

  function getUserSingleTokenValue(address _user, address _token) public view returns (uint256) {
    if (uniqueTokensStaked[_user] <= 0) {
      return 0;
    }
    (uint256 price, uint256 decimals) = getTokenValue(_token);
    return ((stakingBalance[_token][_user] * price) / 10**decimals);
  }

  function getTokenValue(address _token) public view returns (uint256, uint256) {
    // priceFeedAddress
    address priceFeedAddress = tokenPriceFeedMapping[_token];
    AggregatorV3Interface priceFeed = AggregatorV3Interface(priceFeedAddress);
    (, int256 price, , , ) = priceFeed.latestRoundData();
    uint256 decimals = uint256(priceFeed.decimals());
    return (uint256(price), decimals);
  }

  function stakeToken(uint256 _amount, address _token) public onlyTokenIsAllowed(_token) moreThanZero(_amount) {
    // transfers
    IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    updateUniqueTokensStaked(msg.sender, _token);
    stakingBalance[_token][msg.sender] = stakingBalance[_token][msg.sender].add(_amount);
    if (uniqueTokensStaked[msg.sender] == 1) {
      stakers.push(msg.sender);
    }
  }

  function unStakeToken(address _token) public {
    uint256 balance = stakingBalance[_token][msg.sender];
    require(balance > 0, "not zero");
    IERC20(_token).transfer(msg.sender, balance);
    stakingBalance[_token][msg.sender] = 0;
    uniqueTokensStaked[msg.sender] = uniqueTokensStaked[msg.sender].sub(1);
  }

  function updateUniqueTokensStaked(address _user, address _token) internal {
    if (stakingBalance[_token][_user] <= 0) {
      uniqueTokensStaked[_user] = uniqueTokensStaked[_user].add(1);
    }
  }

  function addAllowedTokens(address _token) public onlyOwner {
    allowedTokens.push(_token);
  }

  function tokenIsAllowed(address _token) public view returns (bool) {
    for (uint256 allowedTokensIndex = 0; allowedTokensIndex < allowedTokens.length; allowedTokensIndex++) {
      if (allowedTokens[allowedTokensIndex] == _token) {
        return true;
      }
    }
    return false;
  }

  // modifier
  modifier onlyTokenIsAllowed(address _token) {
    require(tokenIsAllowed(_token), "Token is not Allowed");
    _;
  }
  modifier moreThanZero(uint256 _amount) {
    require(_amount > 0, "not zero");
    _;
  }

  modifier haveStaked(address _user) {
    require(uniqueTokensStaked[_user] > 0, "not yet staked");
    _;
  }
}
