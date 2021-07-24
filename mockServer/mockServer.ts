import { web3SocketProviderContext } from "../scripts/config";
import { MainTokenBookMark, TestTokenBookMark } from "../scripts/contractLibrary";
import { networkConfig } from "../scripts/globals";
import { config } from "dotenv";
import Web3 from "web3";
let mockServer = async () => {
	let LOG = true;
	config();
	let nc = networkConfig()
	let token = nc.getContract(MainTokenBookMark.bnbpolybridge, TestTokenBookMark.bnbpolybridge)
	let bridgeSocket = web3SocketProviderContext(token.address,token.abi, nc.socket);
	let log = await bridgeSocket.events.receipt(async (err: any, res: any) => {
		console.log("======")
		console.log(err,"err")
		console.log(res,"res")
		if (err) {
			console.log("Error within client contract", err)
		}
		else {
			console.log(res)
		}
	})
	console.log( log.id=97)
	
	console.log(await log,"\n\n")
	// console.log(await log.options.subscription.subscriptionHandler)
	// console.log("\n\n")
	// console.log(await log.options.requestManager)
	// console.log(log)
	// if (LOG) console.log(log)
}
let mockServer2=async ()=>{
	let nc = networkConfig()
	let network =nc.getContract(MainTokenBookMark.bnbpolybridge, TestTokenBookMark.bnbpolybridge)

	const web3=new Web3(nc.socket);
	
	
	console.log(await web3.eth.subscribe('logs',{
		address:network.address,
		topics:["0xd555d473"]
	},(err, res)=>{
		console.log(res,"logs res")
		if(err){
			console.error(err)
		}
	}).on("connected", function(subscription){
		console.log("connected",subscription)
	}).on("data", function(log){console.log("data",log)}).subscribe((err,res)=>{
		console.log(err,"error data")
		console.log(res,"res data")
	}))

}

mockServer2();