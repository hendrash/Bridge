pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";


contract TransferToUSDC{

using SafeERC20 for IERC20;

      event bridge (
          address sender,
          uint256 status
     );


function buyUSDC(uint256 _amount,address payable _stableCoin) external payable{
    (bool transferedSuccess,) = _stableCoin.call{value: msg.value} (
     abi.encodeWithSignature(("safeTransferFrom(IERC20,address, address, unit256)"), _stableCoin,msg.sender, address(this), _amount)
    );
    require(transferedSuccess,"Contract transfer failed !");

    (bool getBalanceSuccess,bytes memory data) = _stableCoin.call{value: msg.value} (
     abi.encodeWithSignature(("balanceOf(address)"), _stableCoin)
    );
    require(getBalanceSuccess,"Contract transfer failed !");

    uint256 value;
    assembly{
        value :=mload(add(data, 0x20))
    }
     emit bridge(msg.sender,value);
    }

    fallback() external{
     revert();
    }
}


