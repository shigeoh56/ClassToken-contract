import { expect } from "chai";
import { ethers } from "hardhat";
import { isCallTrace } from "hardhat/internal/hardhat-network/stack-traces/message-trace";

describe("ClassToken", function () {
  it("Should have the correct initial supply", async function () {
    const initialSupply = ethers.utils.parseEther("10000.0");
    const ClassToken = await ethers.getContractFactory("ClassToken");
    const token = await ClassToken.deploy(initialSupply);
    await token.deployed();

    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});
