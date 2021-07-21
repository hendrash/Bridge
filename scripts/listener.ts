import { web3SocketProviderContext } from "./config";
import { MainTokenBookMark, TestTokenBookMark } from "./contractLibrary";
import { networkConfig } from "./globals";
import { config } from "dotenv";
let mockServer=async ()=>{
	let LOG=true;
	config();
	let nc =networkConfig()	
	let bridgeSocket=await web3SocketProviderContext(nc.walletConfig.address, nc.socket, nc.getContract(MainTokenBookMark.bnbpolybridge,TestTokenBookMark.bnbpolybridge).abi);
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