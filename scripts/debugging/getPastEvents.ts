import { web3Provider, web3ProviderContext } from "../config";
import { MainTokenBookMark, TestTokenBookMark } from "../contractLibrary";
import { networkConfig } from "../globals";

let getPastEvents =async()=>{
	let network = networkConfig();
		let token = network.getContract(MainTokenBookMark.bnbpolybridge, TestTokenBookMark.bnbpolybridge)
		// console.log(network.socket,network.RPC_URL)
		let contract = web3ProviderContext(token!.address, token!.abi, network.RPC_URL)
		let user = network.walletConfig.address
	await contract.getPastEvents('receipt', {
			fromBlock:0,
			toBlock:'latest'
		},function(error:any, events:any){
			console.log("1",events)
		}).then(function(events:any){
			console.log("2",events)
		})
};
getPastEvents()