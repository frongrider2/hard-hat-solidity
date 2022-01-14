// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./TestToken.sol";

contract TestPresaleToken is ERC20, ERC20Burnable, Ownable, Mintable {
  TestToken public token;
  uint256 public totalBurn = 0;
  uint256 public timeToUpgrade = 0;

  using SafeMath for uint256;

  constructor() ERC20("Presale", "PS") {}

  function setToken(address _address) external onlyOwner {
    token = TestToken(_address);
  }

  function setTimeToUpgrade(uint256 _timeToUpgrade) external onlyOwner {
    timeToUpgrade = _timeToUpgrade;
  }

  function mintPresale(address _to, uint256 _amount) public onlyMinter {
    increaseMint(_amount);
    _mint(_to, _amount);
  }

  function burn(uint256 _amount) public override {
    ERC20Burnable.burn(_amount);
    totalBurn = totalBurn.add(_amount);
  }

  function burnForm(address _account, uint256 _amount) public {
    ERC20Burnable.burnFrom(_account, _amount);
    totalBurn = totalBurn.add(_amount);
  }

  // upgrade Presale to real Token
  function upgrade() external {
    uint256 amount = balanceOf(msg.sender);
    _burn(msg.sender, amount);
    token.mint(msg.sender, amount);
  }

  modifier timeRequire() {
    require(block.timestamp != 0, "No setTime");
    require(block.timestamp >= timeToUpgrade, "No time");
    _;
  }
}
