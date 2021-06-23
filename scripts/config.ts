import Web3 from "web3";
import { HttpProviderOptions, WebSocketEvent, WebsocketProviderOptions } from "web3-core-helpers";
import { networkConfig } from "./globals";
import BridgeEvent from "../build/abi/TransferToUSDC.json";
import { deprecate } from "util";
export const config = () => { require('dotenv').config() }
export const bridgeSocket = () => {
	const sockProvider = new Web3.providers.WebsocketProvider(networkConfig().socket, { timeout: 10000 } as WebsocketProviderOptions)
	const webSocketProvider = new Web3(sockProvider);
	console.log("socket")
	return new webSocketProvider.eth.Contract((BridgeEvent as any), networkConfig().ContractAddress)
}


export const web3Provider = (contractAddress:string) => {
	const httpProvider = new Web3.providers.HttpProvider(networkConfig().RPC_URL, { timeout: 10000 } as HttpProviderOptions)
	const web3Provider = new Web3(httpProvider);
	return new web3Provider.eth.Contract((BridgeEvent as any),contractAddress )
}

export const bridgeEvent = () => {
	const httpProvider = new Web3.providers.HttpProvider(networkConfig().RPC_URL, { timeout: 10000 } as HttpProviderOptions)
	const web3Provider = new Web3(httpProvider);
	return new web3Provider.eth.Contract((BridgeEvent as any), networkConfig().ContractAddress)
}