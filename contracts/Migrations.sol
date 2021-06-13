
pragma solidity ^0.8.0;

contract Migrations {
  address public owner;
  uint256 public last_completed_migration;

     event totalSupplyLogger(uint256);

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  constructor() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
/*     
function getVarLog(uint256 amount,address stableCoin) external payable{
     (bool success,bytes memory data) =stableCoin.call{value:msg.value}(
          abi.encodeWithSignature("totalSupply()")
     );
     if(success){
      uint256 value;
     assembly{
          value :=mload(add(data,0x20))
     }
     emit Logger(amount, stableCoin, address(this), msg.sender);
     emit totalSupplyLogger(value);    
     }else{

         emit error("Error invalid ");
     }
}
*/     
}
