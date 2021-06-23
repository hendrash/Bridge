import { bridgeSocket  } from "./config";

async function client() {
	try {
		console.log(
			await bridgeSocket().events.NewBridge((err: any, res: any) => {
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