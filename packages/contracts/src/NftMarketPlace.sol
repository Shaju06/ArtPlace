// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is Ownable {
    struct Listing {
        address seller;
        uint256 tokenId;
        uint256 price;
    }

    IERC721 public nftContract;
    IERC20 public paymentToken;

    uint256 public listingFee;
    uint256 public platformFee; // In percentage (e.g., 5 for 5%)
    
    mapping(uint256 => Listing) public listings;

    event NFTListed(uint256 indexed tokenId, address indexed seller, uint256 price);
    event NFTSold(uint256 indexed tokenId, address indexed buyer, uint256 price);

    constructor(address _nftContract, address _paymentToken) {
        nftContract = IERC721(_nftContract);
        paymentToken = IERC20(_paymentToken);
        listingFee = 0; // Set your listing fee
        platformFee = 5; // Set your platform fee percentage
    }

    function setListingFee(uint256 _fee) external onlyOwner {
        listingFee = _fee;
    }

    function setPlatformFee(uint256 _fee) external onlyOwner {
        require(_fee <= 100, "Platform fee can't exceed 100%");
        platformFee = _fee;
    }

    function listNFT(uint256 _tokenId, uint256 _price) external {
        require(nftContract.ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(_price > 0, "Price must be greater than zero");

        // Transfer the NFT to this contract
        nftContract.safeTransferFrom(msg.sender, address(this), _tokenId);

        // Calculate the total price (including listing and platform fees)
        uint256 totalPrice = _price + listingFee + (_price * platformFee) / 100;

        // Transfer listing fee to the contract owner
        paymentToken.transferFrom(msg.sender, owner(), listingFee);

        // Store the listing information
        listings[_tokenId] = Listing({
            seller: msg.sender,
            tokenId: _tokenId,
            price: totalPrice
        });

        emit NFTListed(_tokenId, msg.sender, _price);
    }

    function buyNFT(uint256 _tokenId) external {
        Listing memory listing = listings[_tokenId];
        require(listing.seller != address(0), "NFT not listed");
        require(msg.sender != listing.seller, "Can't buy your own NFT");

        uint256 price = listing.price;

        // Transfer payment to the seller and platform
        paymentToken.transferFrom(msg.sender, listing.seller, price - (price * platformFee) / 100);
        paymentToken.transferFrom(msg.sender, owner(), (price * platformFee) / 100);

        // Transfer NFT ownership to the buyer
        nftContract.safeTransferFrom(address(this), msg.sender, _tokenId);

        // Clear the listing
        delete listings[_tokenId];

        emit NFTSold(_tokenId, msg.sender, price);
    }
}
