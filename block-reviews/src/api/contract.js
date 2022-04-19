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

export const getNftUri = async(nftId) => {
    try {
        const res = await contract_Client.get(`/blockreview/review/nft/${nftId}`);
        return res;
    } catch (err) {
        throw err;
    }
}