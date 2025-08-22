import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const initialSupply = ethers.parseUnits("100000000", 18); // 100M CHOCO
  const ChocoToken = await ethers.getContractFactory("ChocoToken");
  const choco = await ChocoToken.deploy(deployer.address, initialSupply);
  await choco.waitForDeployment();
  console.log("ChocoToken:", await choco.getAddress());

  const FeeSplitter = await ethers.getContractFactory("FeeSplitter");
  const feeSplitter = await FeeSplitter.deploy(deployer.address, deployer.address, 7000);
  await feeSplitter.waitForDeployment();
  console.log("FeeSplitter:", await feeSplitter.getAddress());

  const ChocoFactory = await ethers.getContractFactory("ChocoFactory");
  const factory = await ChocoFactory.deploy(deployer.address);
  await factory.waitForDeployment();
  console.log("ChocoFactory:", await factory.getAddress());

  const ChocoRouter = await ethers.getContractFactory("ChocoRouter");
  // placeholder WETH: set to chain wrapped native token when deploying to testnets
  const router = await ChocoRouter.deploy(await factory.getAddress(), ethers.ZeroAddress);
  await router.waitForDeployment();
  console.log("ChocoRouter:", await router.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
