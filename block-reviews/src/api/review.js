import api from  './apiClient'
import { v4 as uuidv4 } from 'uuid';

export const CreateReview = async (review) => {    
    const res = await api.post('/Review/Create', {                       
        Id: uuidv4(),
        UserId:review.UserId,
        CategoryId:review.CategoryId,
        StoreId:review.StoreId,
        Title:review.Title,
        Content:review.Content,
        User: {
            Id: review.UserId,
            AccountPrivateKey: review.User.AccoutPrivateKey,
            AccountPublicKey: review.User.AccountPublicKey
        }
    })       
    .catch(function(e) {
        console.log(e.response)
        console.log(res);
        console.log(res.data);
    });
    return res;
}