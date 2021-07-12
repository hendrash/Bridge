import { web3Provider } from "../scripts/config";
import { ContractDto, MainTokenBookMark, TestTokenBookMark } from "../scripts/contractLibrary";
import { NetConnection, networkConfig } from "../scripts/globals";

contract('USDC-Contract', function (accounts) {
	let LOG = true;
	let network: NetConnection;
	let contract: any;
	let token: ContractDto;
	let user: string;
	before("initalize provider", async function () {
		network = networkConfig(accounts[0])
		//Initalize token 
		token = network.getContract(MainTokenBookMark.usdc, TestTokenBookMark.busd)
		contract = web3Provider(token!.address,  token!.abi)
		user = network.walletConfig.address;
	})


	it("Confirming approval", async function () {
		console.log(user)
		console.log(token.address)
		
		let log = await contract.methods.approve(user, '100').send({
			from: user
		}).once('transactionHash',(hash:any)=>{console.log(hash)})
		if (LOG) console.log(log)
	});

	it("Get check", async function () {
		let log = await contract.methods.allowance(user, user).call({
			from: user
		})
		if (LOG) console.log(log)
	})

	it("Transfer to USDC", async function () {
		let log = await contract.methods.transfer(user, '100').send({
			from: user
		}).once('transactionHash',(hash:any)=>{console.log(hash)});
		if (LOG) console.log(log)
	});

	it("Check USDC balance", async function () {
		let log = await contract.methods.balanceOf(user).call({
			from: network.walletConfig.address
		})
		if (LOG) console.log(log)
	})

	after(function (done) {
		done();

	});
})

