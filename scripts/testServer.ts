// import BridgeEvent from "../build/abi/contractAddress.json";
// import { web3Provider, webSocketProvider } from "./config";
import { networkConfig } from "./globals";

async function server() {
  /*
    const bridgeEvent = new web3Provider.eth.Contract((BridgeEvent as any), networkConfig().contractAddress)
    const bridgeSocket = new webSocketProvider.eth.Contract((BridgeEvent as any), networkConfig().contractAddress)
    try {

        console.log((await bridgeEvent.methods.getVarLog('1000', networkConfig().tokenAddress).send({
            from: networkConfig().walletConfig.address
        }, function (err: any, res: any) {
            if (err) {
                console.error("Error from within the contract:\n", err, res)
                return;
            } else {
                console.log("Transaction Hash: \t" + res)
            }

        })).events);
        // await bridgeEvent.events.getVarLog('1000',networkConfig().tokenAddress).on('Logger', (event:any)=>{ console.log(event) })


        console.log(bridgeSocket.events.allEvents((err: any, res: any) => {
            if (err) {
                console.log(err)

            } else {
                console.log(res)
            }
        }));

        (await bridgeEvent.methods.getVarLog('1000', networkConfig().tokenAddress).send({
            from: networkConfig().walletConfig.address
        }, function (err: any, res: any) {
            if (err) {
                console.error("Error from within the contract:\n", err, res)
                return;
            } else {
                console.log("Transaction Hash: \t" + res)
            }
        })).events
        

    }
    catch (e) {
        console.log(e)
    }
    */
}

server();