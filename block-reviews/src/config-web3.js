// import Web3 from "web3";

// const reviewContract = {
//     address : "0xe53D23e66E395B4C19b083955F28486e18293D6f",
//     abi: [
//         {
//             "inputs": [
//                 {
//                     "internalType": "address payable",
//                     "name": "_tokenContractAddress",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address payable",
//                     "name": "_nftContractAddress",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "_forwarderAddress",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "payable",
//             "type": "constructor"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "title",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "description",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "writer",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "address[]",
//                     "name": "likedUser",
//                     "type": "address[]"
//                 }
//             ],
//             "name": "like_event",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "title",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "description",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "writer",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "nftId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "review_event",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "_from",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "_to",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "_tokenId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "tradeNft_event",
//             "type": "event"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "Review_mapping",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "id",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "title",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "description",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "writer",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "nftId",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "price",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "category",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "createdAt",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "TotalSupply",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "approveForGSN",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_tokenOwner",
//                     "type": "address"
//                 }
//             ],
//             "name": "approveForNFT",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_reviewId",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "_admin",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "createLiked",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_title",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_des",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "_admin",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "_nftOwner",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_nftUri",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_category",
//                     "type": "string"
//                 }
//             ],
//             "name": "createReview",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_owner",
//                     "type": "address"
//                 }
//             ],
//             "name": "getNftBalanceOf",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_nftId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "getNftOwnerOf",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_nftId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "getNftTokenUri",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_category",
//                     "type": "string"
//                 }
//             ],
//             "name": "getReviewByCategory",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "uint256",
//                             "name": "id",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "title",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "description",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "writer",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "address[]",
//                             "name": "likedUser",
//                             "type": "address[]"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "nftId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "price",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "category",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "createdAt",
//                             "type": "uint256"
//                         }
//                     ],
//                     "internalType": "struct BlockReview.Review[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_reviewId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "getReviewById",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address[]",
//                     "name": "",
//                     "type": "address[]"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_writer",
//                     "type": "address"
//                 }
//             ],
//             "name": "getReviewByWriter",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "uint256",
//                             "name": "id",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "title",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "description",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "writer",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "address[]",
//                             "name": "likedUser",
//                             "type": "address[]"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "nftId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "price",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "category",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "createdAt",
//                             "type": "uint256"
//                         }
//                     ],
//                     "internalType": "struct BlockReview.Review[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "forwarder",
//                     "type": "address"
//                 }
//             ],
//             "name": "isTrustedForwarder",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_tokenId",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_price",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "registerForSale",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "reviewByCategory_mapping",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "reviewByWriter_mapping",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "reviewCoinAddress",
//             "outputs": [
//                 {
//                     "internalType": "contract ReviewCoin",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "reviewNftAddress",
//             "outputs": [
//                 {
//                     "internalType": "contract ReviewNFT",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_owner",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "_buyer",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_tokenId",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "saleNFT",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_sendBy",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "_sendTo",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "transferToken",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "trustedForwarder",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "versionRecipient",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_tokenId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "withdrawFromSale",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         }
//     ]
// }

// export let web3 = new Web3(window.ethereum);