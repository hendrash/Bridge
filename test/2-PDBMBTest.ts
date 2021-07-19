import { web3Provider } from "../scripts/config";
import { ContractDto, MainTokenBookMark, TestTokenBookMark } from "../scripts/contractLibrary";
import { NetConnection, networkConfig } from "../scripts/globals";

contract('2) PDBMB Contract test set up', function (accounts) {
	let LOG =false;
	let network: NetConnection;
	let contract: any;
	let token: ContractDto;
	let user: string
	before("initalize provider", function () {
		network = networkConfig(accounts[0])
		token = network.getContract(MainTokenBookMark.bnbpolybridge, TestTokenBookMark.bnbpolybridge)
		contract = web3Provider(token!.address, token!.abi)
		user = network.walletConfig.address
	})
	it("approve transaction", async function () {
		let _network=networkConfig(accounts[0])
		let _token= _network.getContract(MainTokenBookMark.usdc, TestTokenBookMark.busd);
		let _contract = web3Provider(_token!.address, _token!.abi)		
		let log=await _contract.methods.approve(token.address,network.testAmt).send({
			from: user
		}).once('transactionHash',(hash:any)=>console.log(hash))
		if(LOG)console.log(log)
	})
	it("transferToContract test", async function () {
		let log = await contract.methods.transferToContract(network.testAmt).send({
			from: user
		}).once('tranactionHash',(hash: any)=>console.log(hash))
		if(true) console.log(log)
	})



})