// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract BUSDTransfer{

using SafeERC20 for IERC20;

      event NewBridge (
          address sender,
          uint256 status,
          uint date,
          address transaction
     );


function buyUSDC(uint256 _amount,address payable _stableCoin) external payable{
    IERC20(_stableCoin).transferFrom(msg.sender, address(this), _amount);
    emit NewBridge(msg.sender, _amount,block.timestamp,block.coinbase);
}

    fallback() external{
     revert();
    }
}
