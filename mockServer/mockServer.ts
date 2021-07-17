import { web3SocketProvider } from "../scripts/config";
import { MainTokenBookMark, TestTokenBookMark } from "../scripts/contractLibrary";
import { networkConfig } from "../scripts/globals";
import { config } from "dotenv";
let mockServer=()=>{
	config();
	let nc =networkConfig()	
	let bridgeSocket=web3SocketProvider(nc.walletConfig.address, nc.RPC_URL, nc.getContract(undefined,TestTokenBookMark.bnbpolybridge).abi);
	
	bridgeSocket.events.receipt((err:any, res:any)=>{
		if(err){
			console.log("Error within client contract",err)
		}
		else {
			console.log(res)
		}
	})
}
mockServer();