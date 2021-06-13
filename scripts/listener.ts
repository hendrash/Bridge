import { webSocketProvider } from "./config";
import { networkConfig } from "./globals";
import BridgeEvent from "../build/abi/TransferToUSDC.json";

async function client() {
	const bridgeSocket = new webSocketProvider.eth.Contract((BridgeEvent as any), networkConfig().TransferToUSDC)
	try {
		console.log(
			await bridgeSocket.events.bridge((err: any, res: any) => {
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