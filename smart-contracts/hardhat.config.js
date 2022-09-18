require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	networks: {
		hardhat: {},
		mainnet: {
			url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
			accounts: [process.env.PRIVATE_KEY],
		},
		rinkeby: {
			url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
			accounts: [process.env.PRIVATE_KEY],
			gasPrice: 10000000000,
		},
		kovan: {
			url: `https://eth-kovan.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
			accounts: [process.env.PRIVATE_KEY],
		},
		goerli: {
			url: `https://eth-goerli.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
			accounts: [process.env.PRIVATE_KEY],
		},
	},

	solidity: {
		compilers: [
			{
				version: "0.8.12",
			},
		],
	},
};
