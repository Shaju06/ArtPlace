// import { expect } from "chai";
// import  { ethers } from "hardhat";

// describe("NFTMarketplace", function () {
//   let NFTMarketplace;
//   let nftMarketplace;
//   let NFT, Token;
//   let nft, token;
//   let owner, user1, user2;

//   before(async function () {
//     [owner, user1, user2] = await ethers.getSigners();

//     NFT = await ethers.getContractFactory("NFT"); // Assuming you have an NFT contract
//     nft = await NFT.deploy("MyNFT", "NFT");

//     Token = await ethers.getContractFactory("Token"); // Assuming you have a Token contract
//     token = await Token.deploy();

//     NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
//     nftMarketplace = await NFTMarketplace.deploy(nft.address, token.address);
//   });

//   it("should list and buy NFTs", async function () {
//     // Mint an NFT for user1
//     await nft.connect(owner).mint(user1.address, 1);

//     // List NFT by user1
//     await nft.connect(user1).approve(nftMarketplace.address, 1);
//     await nftMarketplace.connect(user1).listNFT(1, ethers.utils.parseEther("1.0"));

//     // Buy NFT by user2
//     await token.connect(user2).approve(nftMarketplace.address, ethers.utils.parseEther("1.1"));
//     await nftMarketplace.connect(user2).buyNFT(1);

//     const newOwner = await nft.ownerOf(1);
//     expect(newOwner).to.equal(user2.address);
//   });
// });
