import Web3 from "web3";
import { HttpProviderOptions, WebsocketProviderOptions } from "web3-core-helpers";
export const config = () => { require('dotenv').config() }
export const web3SocketProviderContext = (address: string, abi:any,rpc_socket_url:string) => {
	// const sockProvider = new Web3.providers.WebsocketProvider(rpc_socket_url)
	// console.log(Web3.givenProvider,'\t====\t',rpc_socket_url)
	let socketProvider =new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider(rpc_socket_url),require('net'));
	// const webSocketProvider = new Web3(sockProvider);
	return new socketProvider.eth.Contract(abi, address)
	// return new webSocketProvider.eth.Contract(abi,address)
}

export const web3ProviderContext = (address: string, abi: any, uri: string)=>{
	let _web3=new Web3(new Web3.providers.HttpProvider(uri));
	return new _web3.eth.Contract(abi, address);
}

export const web3Provider = (address: string, abi:any) => {
	return new web3.eth.Contract(abi,address)
}

