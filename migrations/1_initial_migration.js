const Migrations = artifacts.require("Migrations");
const TransferToUSDC = artifacts.require("TransferToUSDC");
module.exports = function(deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(TransferToUSDC);
};
