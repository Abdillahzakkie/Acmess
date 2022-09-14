const Acme = artifacts.require('Acme');

module.exports = function (deployer) {
  deployer.deploy(Acme);
};
