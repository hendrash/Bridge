import usdc from "../build/abi/main/usdc.json"
import busdc from "../build/abi/test/busdc.json"
//one to one
export const enum MainTokenBookMark {
	usdc = "Binance-Peg USD Coin (USDC)"
}
export const MainTokenBook = new Map([
	// https://bscscan.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
	['Binance-Peg USD Coin (USDC)', {
		address:'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
		abi:usdc
	}]
]);
export enum TestTokenBookMark {
	busd="BUSD Token (BUSD)"
 }
export const TestTokenBook = new Map([
    // https://testnet.bscscan.com/address/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7
	['BUSD Token (BUSD)', {
		address:'0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
		abi: busdc
	}]
])
export type ContractDto= {
	abi:any,
	address:string,
}

export type WalletConnection = {
    address: string,
    mnemonic?:string
}
export enum State{
	MAIN="MAIN",TEST="TEST",LOCAL="LOCAL"
}