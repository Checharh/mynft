var argosCollection = artifacts.require("./ArgosCollection.sol")

module.exports = function (deployer) {
  deployer.deploy(argosCollection);
};