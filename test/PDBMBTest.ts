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
		token = network.getContract(MainTokenBookMark.usdc, TestTokenBookMark.busd)
		contract = web3Provider(token!.address, network.RPC_URL, token!.abi)
		user = network.walletConfig.address;
	})

	it("Confirming approvel", async function () {
		let log = await contract.methods.approve(user, 100000).send({
			from: user
		})
		if (LOG) console.log(log)
	});

	it("Confirm approvel", async function () {
		let log = await contract.methods.allowance(user, token.address).call({
			from: user
		})
		if (LOG) console.log(log)
	})

	it("Transfer to USDC", async function () {
		let log = await contract.methods.transferFrom(user, token.address, 100000).send({
			from: user
		});
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

