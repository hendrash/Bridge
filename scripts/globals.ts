import { config } from "dotenv"

export const TestNet: NetConnection = {
    ContractAddress: "0xB4E3409e0B78021238C96670C5E93f58B03AECd3",
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    socket: 'wss://testnet-dex.binance.org/api/ws',
    stableCoinAddress: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
    // https://testnet.bscscan.com/address/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
// https://bscscan.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
export const MainNet: NetConnection = {
    ContractAddress: "0x674fbDD397bC632E51CEE410A30597Df32A53261",
    RPC_URL: "https://bsc-dataseed.binance.org/",
    socket: 'wss://dex.binance.org/api/ws',
    stableCoinAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
    // socket: 'wss://stream.binance.com:9443/ws',
}
export const LocalNet: NetConnection = {
    ContractAddress: "0x043774C7dcE1D5151d44a8FbcEA6CDAfe578938b",
    RPC_URL: "http://127.0.0.1:8545",
    socket: `ws://127.0.0.1:8545`,
    stableCoinAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    walletConfig: {
        address: "0xa84019C3A670826555D3442EfB68ED49fd1660F4"
    }
}
export type NetConnection = {
    ContractAddress: string,
    RPC_URL: string
    socket: string
    stableCoinAddress: string
    walletConfig: WalletConnection

}
export type WalletConnection = {
    address: string
}
export const networkConfig = () => {
    config();
    if (process.env.NETWORK + "" === "MAIN") {
        return MainNet;
    }
    if (process.env.NETWORK + "" === "TEST") {
        return TestNet;
    }
    else {
        return LocalNet
    }
}