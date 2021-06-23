const PolyDragonBinanceMaticBridge =artifacts.require("PolyDragonBinanceMaticBridge")
module.exports = function(deployer) {
  require('dotenv').config()
let stableCoinAddress=process.env.NETWORK==='TEST'?"0x9780881Bf45B83Ee028c4c1De7e0C168dF8e9eEF":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
  deployer.deploy(PolyDragonBinanceMaticBridge,stableCoinAddress)
};
