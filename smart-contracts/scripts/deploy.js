const hre = require("hardhat");

async function main() {
	const Acme = await hre.ethers.getContractFactory("Acme");
	const acme = await Acme.deploy();
	await acme.deployed();
	console.log(`Acme deployed to ${acme.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
