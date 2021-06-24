import { bridgeSocket  } from "./config";
import { MainTokenBookMark } from "./contractLibrary";
import { networkConfig } from "./globals";

async function client() {

let network =networkConfig(MainTokenBookMark.usdc);
	try {
		console.log(
			await bridgeSocket(network).events.NewBridge((err: any, res: any) => {
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