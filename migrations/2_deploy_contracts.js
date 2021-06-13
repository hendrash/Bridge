const { createNoSubstitutionTemplateLiteral } = require("typescript");

const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const TransferToUSDC = artifacts.require("TransferToUSDC");
module.exports = function(deployer, test) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  // deployer.autolink();
  deployer.deploy(TransferToUSDC);
};
// tcp.port == 8545 && ip.addr==54.199.148.5
// useful for debugging