import { web3SocketProvider } from "../scripts/config";
import { MainTokenBookMark, TestTokenBookMark } from "../scripts/contractLibrary";
import { networkConfig } from "../scripts/globals";
import { config } from "dotenv";
let mockServer=async ()=>{
	let LOG=true;
	config();
	let nc =networkConfig()	
	let bridgeSocket=await web3SocketProvider(nc.walletConfig.address, nc.socket, nc.getContract(undefined,TestTokenBookMark.bnbpolybridge).abi);
	let log=bridgeSocket.events.receipt((err:any, res:any)=>{
		if(err){
			console.log("Error within client contract",err)
		}
		else {
			console.log(res)
		}
	})
	if(LOG)console.log(log)
}
mockServer();