import Web3 from "web3";
import { HttpProviderOptions, WebSocketEvent, WebsocketProviderOptions } from "web3-core-helpers";
import { networkConfig } from "./globals";
import BridgeEvent from "../build/abi/TransferToUSDC.json";
export const config=()=>{require('dotenv').config()}
export const httpProvider = new Web3.providers.HttpProvider(networkConfig().RPC_URL, {timeout:10000} as HttpProviderOptions)
export const sockProvider = new Web3.providers.WebsocketProvider(networkConfig().socket,{timeout:10000} as WebsocketProviderOptions)
export const web3Provider=new Web3(httpProvider);
export const webSocketProvider=new Web3(sockProvider);
export const bridgeEvent = new web3Provider.eth.Contract((BridgeEvent as any), networkConfig().TransferToUSDC)