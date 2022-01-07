// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Helper.sol";

contract AdvanceCollection is ERC721URIStorage, Helper {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  // Variable
  bytes32 public keyHash;
  uint256 public fee;
  enum Breed {
    PUG,
    SHIBA_INU,
    ST_BERNARD
  }
  mapping(uint256 => Breed) tokenIdToBreed;
  mapping(uint256 => address) reqestIdToSender;

  // event
  event requesteCreateCollectible(uint256 indexed requestId, address requester);
  event breedAssigned(uint256 indexed tokenId, Breed breed);

  constructor(uint256 _fee) ERC721("DOGIE", "DOG") {
    _tokenIds.reset();
    fee = _fee;
  }

  function createCollectible() public returns (uint256) {
    uint256 requestId = random(10000000000000000000);
    uint256 randomNumber = random(10000000000000000000);
    fulfilRandomness(requestId, randomNumber);
    reqestIdToSender[requestId] = msg.sender;
    emit requesteCreateCollectible(requestId, msg.sender);
    return requestId;
  }

  function fulfilRandomness(uint256 requestId, uint256 randomNumber) internal {
    Breed breed = Breed(randomNumber % 3);
    uint256 newTokenId = _tokenIds.current();
    tokenIdToBreed[newTokenId] = breed;
    emit breedAssigned(newTokenId, breed);
    address owner = reqestIdToSender[requestId];
    _mint(owner, newTokenId);
    _tokenIds.increment();
  }

  function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
    require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
    _setTokenURI(tokenId, _tokenURI);
  }
}
