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
	let bridgeSocket = web3SocketProviderContext(token.address, nc.socket, token.abi);
	
	let log = bridgeSocket.events.receipt((err: any, res: any) => {
		if (err) {
			console.log("Error within client contract", err)
		}
		else {
			console.log(res)
		}
	})
	
	if (LOG) console.log(log)
}
let mockServer2=()=>{
	let nc = networkConfig()
	let network =nc.getContract(MainTokenBookMark.bnbpolybridge, TestTokenBookMark.bnbpolybridge)

	const web3=new Web3(nc.socket);
	let hello =web3.eth.subscribe('logs',{
		address:network.address,
		topics:["receipt"]
	},(err, res)=>{
		if(err){
			console.error(err)
		}
	}).on("connected", function(subscription){
		console.log("1",subscription)
	}).on("data", function(log){console.log("2",log)})
console.log(hello)
}
mockServer();