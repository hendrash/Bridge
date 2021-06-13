import { config } from "dotenv"

export const TestNet: NetConnection = {
    TransferToUSDC: "0x5Cc70b806167669a6C5261f05509f025b0409ec0",
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    socket: 'wss://testnet-dex.binance.org/api/ws',
    stableCoinAddress: '0xd37eAa8738F8AC6B48217b46a918Cf39929cEAB5',
    // https://testnet.bscscan.com/address/0xd37eaa8738f8ac6b48217b46a918cf39929ceab5
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
// https://bscscan.com/address/0xe9e7cea3dedca5984780bafc599bd69add087d56
export const MainNet: NetConnection = {
    TransferToUSDC: "0x674fbDD397bC632E51CEE410A30597Df32A53261",
    RPC_URL: "https://bsc-dataseed.binance.org/",
    socket: 'wss://dex.binance.org/api/ws',
    stableCoinAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
    // socket: 'wss://stream.binance.com:9443/ws',
}
export const LocalNet: NetConnection = {
    TransferToUSDC: "0x043774C7dcE1D5151d44a8FbcEA6CDAfe578938b",
    RPC_URL: "http://127.0.0.1:8545",
    socket: `ws://127.0.0.1:8545`,
    stableCoinAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    walletConfig: {
        address: "0xa84019C3A670826555D3442EfB68ED49fd1660F4"
    }
}
export type NetConnection = {
    TransferToUSDC: string,
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