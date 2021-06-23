import { config } from "dotenv"
import { bridgeEvent, web3Provider } from "./config"
import { networkConfig } from "./globals"
let server = async ()=>{
	console.log(
	bridgeEvent().methods.buyUSDC(10,networkConfig().stableCoinAddress).send({
		from: networkConfig().walletConfig.address
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