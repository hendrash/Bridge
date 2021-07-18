import { config } from "dotenv";
import { ContractDto, MainTokenBook, MainTokenBookMark, State, TestTokenBook, TestTokenBookMark, WalletConnection } from "./contractLibrary";
let fs = require("fs");

export abstract class NetConnection {

    constructor() {
        if (process.env.NETWORK + "" === State.TEST) {
            this._getContract = TestTokenBook.get.bind(TestTokenBook)
        }
        else {
            this._getContract = MainTokenBook.get.bind(MainTokenBook)
        }

    }

    public abstract RPC_URL: string
    public abstract socket: string
    public abstract walletConfig: WalletConnection
    public _getContract: (key: MainTokenBookMark | TestTokenBookMark) => ContractDto | undefined;
    public getContract(main?: MainTokenBookMark, test?: TestTokenBookMark) {
        let token: ContractDto;
        if (process.env.NETWORK === State.MAIN) {
            return token = this._getContract.bind(NetConnection)(main!)!
        }
        else if (process.env.NETWORK === State.TEST) {
            return token = this._getContract.bind(NetConnection)(test!)!
        }
        else {
            return token = this._getContract.bind(NetConnection)(main!)!
        }
    }

}

export class TestNet extends NetConnection {
    constructor() {
        super();
    }
    public RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/"
    public socket = 'wss://testnet-dex.binance.org/api/ws'
    public walletConfig = {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}

// https://bscscan.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
export class MainNet extends NetConnection {
    constructor() {
        super();
    }
    public RPC_URL = "https://bsc-dataseed.binance.org/"
    public socket = 'wss://dex.binance.org/api/ws'
    public walletConfig = {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
export class LocalNet extends NetConnection {
    constructor(accounts: string) {
        super();
        this.contractAddress = accounts

    }
    public contractAddress: string;
    public RPC_URL = "http://127.0.0.1:8545"
    public socket = `ws://127.0.0.1:8545`
    public walletConfig = {
        address: start()
    }
}



const start = () => fs.readFileSync(".logs").toString().trim().split("\n")[4].split(" ")[1];

export const networkConfig = (accounts?: string) => {
    config();
    if (process.env.NETWORK + "" === State.MAIN) {
        return new MainNet();
    }
    if (process.env.NETWORK + "" === State.TEST) {
        return new TestNet();
    }
    else {
        return new LocalNet(accounts as string)
    }
}
