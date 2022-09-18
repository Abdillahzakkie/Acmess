//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

contract Acme {
  address payable public  owner;
  uint256 public totalValueLocked;

  mapping(address => uint256) public widgetbalance;

  modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
  }

  constructor() {
    owner = payable(msg.sender);
    widgetbalance[owner] = 100_000;
  }
  
  function transfer(address to, uint256 value) external {
    require(value <= widgetbalance[msg.sender], "amount exceeds widget balance");
    widgetbalance[msg.sender]  -= value;
    widgetbalance[to]  += value;
  }
 
  function mint(uint256 amount) external onlyOwner {
    widgetbalance[owner] += amount;
  }
  
  function burn(uint256 amount) public onlyOwner {
    require(amount <= widgetbalance[owner]);
    widgetbalance[owner] = widgetbalance[owner]- amount;
  
  }
  
  function pay(uint256 amount) external payable {
      require(msg.value >= amount);
      totalValueLocked += msg.value;
  }

  function withdraw() external onlyOwner {
    totalValueLocked = 0;
    (bool status,) = owner.call{value: address(this).balance}("");
    require(status, "withdrawal failed!");
  }
}