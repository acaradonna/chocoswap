import { expect } from "chai";
import { ethers } from "hardhat";

describe("ChocoToken", function () {
  it("mints initial supply to owner", async () => {
    const [owner] = await ethers.getSigners();
    const Choco = await ethers.getContractFactory("ChocoToken");
    const choco = await Choco.deploy(owner.address, ethers.parseUnits("1000", 18));
    await choco.waitForDeployment();

    expect(await choco.balanceOf(owner.address)).to.equal(ethers.parseUnits("1000", 18));
  });
});
