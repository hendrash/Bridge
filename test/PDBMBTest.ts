import { web3Provider } from "../scripts/config";
import { MainTokenBookMark } from "../scripts/contractLibrary";
import { networkConfig } from "../scripts/globals";
import usdc from "../test/abi/usdc.json";
const PolyDragonBinanceMaticBridge = artifacts.require("PolyDragonBinanceMaticBridge")
contract('USDC-Contract',function (accounts){
	
it("Confirm buying USDC",async function(){
	let network =networkConfig(MainTokenBookMark.usdc);
	console.log(await web3Provider(network,usdc).methods.approve(accounts[1],1000).send({
		from: network.walletConfig.address
	},function(err:any, res:any){
		console.log(err)
		// assert.notExists(err, err)
		// assert.exists(res,"Failed to approve trasaction");
		console.log(res);
	}))
});
})