import Web3 from "web3";
import { HttpProviderOptions, WebsocketProviderOptions } from "web3-core-helpers";
import BridgeEvent from "../build/abi/TransferToUSDC.json";
import { NetConnection, networkConfig } from "./globals";
export const config = () => { require('dotenv').config() }
export const bridgeSocket = (network:NetConnection) => {
	const sockProvider = new Web3.providers.WebsocketProvider(network.socket, { timeout: 10000 } as WebsocketProviderOptions)
	const webSocketProvider = new Web3(sockProvider);
	return new webSocketProvider.eth.Contract((BridgeEvent as any), network.ContractAddress)
}

export const web3Provider = (network:NetConnection, contract:any) => {
	const httpProvider = new Web3.providers.HttpProvider(network.RPC_URL, { timeout: 10000 } as HttpProviderOptions)
	const _web3Provider = new Web3(httpProvider);
	return new _web3Provider.eth.Contract(contract,network.ContractAddress)
}

export const bridgeEvent = (network :NetConnection) => {
	const httpProvider = new Web3.providers.HttpProvider(network.RPC_URL, { timeout: 10000 } as HttpProviderOptions)
	const _web3Provider = new Web3(httpProvider);
	return new _web3Provider.eth.Contract((BridgeEvent as any),network.ContractAddress)
}

