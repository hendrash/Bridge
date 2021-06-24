
// export const enum mainContractBookMark {
// 	usdc = "Binance-Peg USD Coin (USDC)"
// }
export const enum MainTokenBookMark {
	usdc = "Binance-Peg USD Coin (USDC)"
}
export const MainTokenBook = new Map([
	// https://bscscan.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
	['Binance-Peg USD Coin (USDC)', '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d']
]);
export enum TestTokenBookMark {
	busd="BUSD Token (BUSD)"
 }
export const TestTokenBook = new Map([
    // https://testnet.bscscan.com/address/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7
	['BUSD Token (BUSD)', '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7']
])