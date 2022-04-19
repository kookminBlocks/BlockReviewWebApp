import axios from 'axios';
import contract_Client from './bcClient';

// Get User BRC Balance;
export const GetBalance = async (userPublicKey) => {
    console.log(`---GetBalance---`);

    const payload = {
        pubkey : userPublicKey
    }
    console.log(payload);
    const res = await contract_Client.post('/blockreview/user/eoa/balance', payload)
    .catch(function(e) {
        console.log(e);
    });
    console.log(res);
    return res;
}


// Get User Faucet;
export const Faucet = async (userPublicKey) => {
    const payload = {
        sendTo : userPublicKey
    }
    
    const res = await contract_Client.post('/blockreview/user/faucet', payload)
        .catch(function(e) {
            console.log(e)
        });

    return res;
}

// NFT 생성하기; IPFS Upload Image -> IPFS Upload JSON
export const UploadIpfs = async (formData) => {
    const res = await contract_Client.post('/blockreview/review/create/ipfs', formData)
        .catch(function(e) {
            console.log(e);
        });
    
    return res;
}

// NFT URL 가져오기
export const getNftUri = async(nftId) => {
    try {
        const res = await contract_Client.get(`/blockreview/review/nft/${nftId}`);
        return res;
    } catch (err) {
        throw err;
    }
}

// 리뷰 좋아요 클릭
export const createLiked = async(postData) => {
    try {
        const res = await contract_Client.post(`/blockreview/review/like`,postData)
        .catch(function(e){
            console.log(e);
        });
        
        return res;
    } catch (err) {
        throw err;
    }
}

// NFT 데이터 정보 가져오기
export const getNftData = async(nftUrl) => {
    try {        
        const res = await axios.get(nftUrl);
        return res;
    } catch (err) {
        throw err;
    }
}

export const adminPubKey = "0xB28333cab47389DE99277F1A79De9a80A8d8678b";

export const onSale = async(params) => {
    try {
        const res = await axios.post(`/blockreview/review/sale/onsale`, {
            reviewId : params.reviewId,
            price : params.price,
            pubkey : params.pubkey,
            privateKey: params.privatekey,
        })
        return res;
    } catch (err) {
        throw err;
    }
}

export const offSale = async(params) => {
    try {
        const res = await axios.post(`/blockreview/review/sale/offsale`, {
            reviewId : params.reviewId,
            pubkey : params.pubkey,
            privateKey: params.privatekey,
        })
        return res;
    } catch (err) {
        throw err;
    }
}

export const trade = async(params) => {
    try {
        const res = await axios.post(`/blockreview/review/sale/trade`, {
            reviewId : params.reviewId,
            pubkey_buyer: params.pubkey_buyer,
            privatekey_buyer: params.privatekey_buyer
        })
        return res;
    } catch (err) {
        throw err;
    }
}