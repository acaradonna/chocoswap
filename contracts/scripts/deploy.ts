import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const Choco = await ethers.getContractFactory("ChocoToken");
  const initialSupply = ethers.parseUnits("1_000_000", 18);
  const choco = await Choco.deploy(deployer.address, initialSupply);
  await choco.waitForDeployment();
  console.log("ChocoToken:", await choco.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
