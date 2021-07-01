import {  web3SocketProvider  } from "./config";
import { ContractDto, MainTokenBookMark } from "./contractLibrary";
import { networkConfig } from "./globals";

async function client() {

let network =networkConfig();
	try {
		let token: ContractDto;
		if(process.env.NETWORK==="TEST"){
			token=network._getContract(MainTokenBookMark.usdc)!;

		}else{
			token=network._getContract(MainTokenBookMark.usdc)!
		}

		console.log(
			await web3SocketProvider(token!.address, network.RPC_URL,token!.abi).events.NewBridge((err: any, res: any) => {
				if (err) {
					console.log("Error within client contract",err)
				}
				else {
					console.log(res)
				}

			})
		)

	} catch (error) {
		console.log(error)
	}
}
client();