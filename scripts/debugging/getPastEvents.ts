import { on } from "process";
import { web3Provider, web3ProviderContext, web3SocketProviderContext } from "../config";
import { MainTokenBookMark, TestTokenBookMark } from "../contractLibrary";
import { networkConfig } from "../globals";

let getPastEvents =async()=>{
	let network = networkConfig();
		let token = network.getContract(MainTokenBookMark.bnbpolybridge, TestTokenBookMark.bnbpolybridge)
		// console.log(network.socket,network.RPC_URL)
		let contract = web3SocketProviderContext(token!.address, token!.abi, network.socket)
		let user = network.walletConfig.address
	
		// await contract.getPastEvents('receipt', {
		// 	fromBlock:10860580,
		// 	toBlock:'latest'
		// },function(error:any, events:any){
		// 	console.log("1",events)
		// }).then(function(events:any){
		// 	console.log("2",events)
		// })
		contract
	console.log("====\n", contract.events.receipt({}).on('data',async function(event:any){console.log("event",event)})
	.on('error',function(error:any,receipt:any){console.log('error',error,receipt)})
	.on("connected",(a:any,b:any)=>{console.log('data',a,b)}))


};
getPastEvents()