import Web3 from "web3";
import { HttpProviderOptions, WebsocketProviderOptions } from "web3-core-helpers";
export const config = () => { require('dotenv').config() }
export const web3SocketProvider = (address: string, rpc_socket_url:string, abi:any) => {
	const sockProvider = new Web3.providers.WebsocketProvider(rpc_socket_url, { timeout: 10000 } as WebsocketProviderOptions)
	const webSocketProvider = new Web3(sockProvider);
	return new webSocketProvider.eth.Contract(abi,address)
}

export const web3Provider = (address: string,rpc_url:string, abi:any) => {
	const httpProvider = new Web3.providers.HttpProvider(rpc_url, { timeout: 10000 } as HttpProviderOptions)
	const _web3Provider = new Web3(httpProvider);
	return new _web3Provider.eth.Contract(abi,address)
}


