import { bridgeEvent } from "./config"
import { MainTokenBookMark } from "./contractLibrary"
import { networkConfig } from "./globals"
let server = async ()=>{

let network =networkConfig(MainTokenBookMark.usdc);
	console.log(
	bridgeEvent(network).methods.buyUSDC(10,network.tokenAddress).send({
		from: network.walletConfig.address
	},function(err:any, res: any){
		if(err){
			console.log("Error within the contract:\n",err)
			return;
		}
		else{
			console.log("Transaction Hash: \t"+res)
		}
	}))
}
server();