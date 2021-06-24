import { config } from "dotenv"
import { MainTokenBook, MainTokenBookMark, TestTokenBook, TestTokenBookMark } from "./contractLibrary";

export abstract class NetConnection {

    constructor(contractBookMark: MainTokenBookMark | TestTokenBookMark) {
        if (process.env.NETWORK + "" === "MAIN") {
            let mcb = MainTokenBook.get(contractBookMark.toString())
            this.tokenAddress = mcb;
        }
        else {
            let mcb = TestTokenBook.get(contractBookMark.toString())
            this.tokenAddress = mcb;
        }
    }


    public abstract ContractAddress: string;
    public abstract RPC_URL: string
    public abstract socket: string
    public abstract walletConfig: WalletConnection
    public tokenAddress: string | undefined

}

export class TestNet extends NetConnection {
    constructor(contractBookMark: TestTokenBookMark) {
        super(contractBookMark);
    }
    public ContractAddress = "0xB4E3409e0B78021238C96670C5E93f58B03AECd3"
    public RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/"
    public socket = 'wss://testnet-dex.binance.org/api/ws'
    public tokenAddress = '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'
    // https://testnet.bscscan.com/address/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7
    public walletConfig = {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}


// https://bscscan.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
export class MainNet extends NetConnection {
    constructor(contractBookMark: MainTokenBookMark) {
        super(contractBookMark);
    }
    public ContractAddress = "0x674fbDD397bC632E51CEE410A30597Df32A53261"
    public RPC_URL = "https://bsc-dataseed.binance.org/"
    public socket = 'wss://dex.binance.org/api/ws'
    public walletConfig = {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
export class LocalNet extends NetConnection  {
constructor(contractBookMark: MainTokenBookMark) {
        super(contractBookMark);
    }
    public ContractAddress= "0x043774C7dcE1D5151d44a8FbcEA6CDAfe578938b"
    public RPC_URL= "http://127.0.0.1:8545"
    public socket= `ws://127.0.0.1:8545`
    public walletConfig= {
        address: "0xa84019C3A670826555D3442EfB68ED49fd1660F4"
    }
}

export type WalletConnection = {
    address: string
}



export const networkConfig = (contractBookMark: MainTokenBookMark | TestTokenBookMark) => {
    config();
    if (process.env.NETWORK + "" === "MAIN") {
        return new MainNet(contractBookMark as MainTokenBookMark);
    }
    if (process.env.NETWORK + "" === "TEST") {
        return new TestNet(contractBookMark as TestTokenBookMark);
    }
    else {
        return new LocalNet(contractBookMark as MainTokenBookMark)
    }
}
