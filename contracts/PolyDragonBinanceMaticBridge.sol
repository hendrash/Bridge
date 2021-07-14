pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
contract PolyDragonBinanceMaticBridge{
	uint nonce;	
	address token;

	constructor(address _token){
		nonce=0;
		token=_token;
	}
	event receipt(uint256,address,bytes32,uint);

using SafeERC20 for IERC20;

function transferToClient(address user, uint256 _amount, bytes memory _signature) external payable{
	require(verify(user, _amount, _signature));
	IERC20(token).safeTransfer(user, _amount);
	nonce++;
}

function transferToContract(uint256 _amount) external payable{
	IERC20(token).transferFrom(msg.sender, address(this), _amount);
	bytes32 signature=clientSignature(_amount);
	emit receipt(_amount, msg.sender,signature,nonce+1);
}


function clientSignature(uint _amount) private view returns(bytes32)  {
	 return keccak256(abi.encodePacked(msg.sender, _amount,nonce+1));
}

function verify(address _signer, uint256 _amount, bytes memory _signature)private view returns(bool){
	bytes32 getSignature=clientSignature(_amount);
	bytes32 ethSignedMessageHash=keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", getSignature));
	(bytes32 r, bytes32 s, uint8 v)=splitSignature(_signature);
	return ecrecover(ethSignedMessageHash, v, r, s)==_signer;
}
function splitSignature(bytes memory _sig) private pure returns(bytes32 r, bytes32 s, uint8 v){
	require(_sig.length==65, 'invalid signature length');
	assembly{
		r:= mload(add(_sig, 32))
		s:=mload(add(_sig, 64))
		v:=byte(0, mload(add(_sig, 96)))
	}
}

fallback()external{
	revert();
}

}