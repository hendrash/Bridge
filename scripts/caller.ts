import { web3Provider } from "./config";
import { MainTokenBookMark, TestTokenBookMark } from "./contractLibrary"
import { networkConfig } from "./globals"
let server = async ()=>{

let network =networkConfig();
	network._getContract(MainTokenBookMark.usdc);
	let token=network.getContract(MainTokenBookMark.usdc, TestTokenBookMark.busd)!;
	console.log(
	web3Provider(token.address, token.abi).methods.buyUSDC(10,token.address).send({
		from: network.walletConfig.address
	},function(err:any, res: any){
		if(err){
			console.log("Error within the contract:\n",err)
			return;
		}
		else{
			console.log("Transaction Hash: \t"+res)
		}
	}))
}
server();

