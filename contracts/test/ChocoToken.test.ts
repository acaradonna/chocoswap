import { expect } from "chai";
import { ethers } from "hardhat";

describe("ChocoToken", () => {
  it("mints initial supply to owner", async () => {
    const [owner] = await ethers.getSigners();
    const initialSupply = ethers.parseUnits("1000", 18);
    const Token = await ethers.getContractFactory("ChocoToken");
    const token = await Token.deploy(owner.address, initialSupply);
    await token.waitForDeployment();

    expect(await token.balanceOf(owner.address)).to.equal(initialSupply);
    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});
