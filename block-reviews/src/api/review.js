import api from  './apiClient'
import { v4 as uuidv4 } from 'uuid';

export const CreateReview = async (review) => {    

    const res = await api.post('/Review/Create', {                       
        Id:uuidv4(),
        UserId:review.UserId,
        CategoryId:review.CategoryId,
        StoreId:review.StoreId,
        Title:review.Title,
        Content:review.Content,
    })       
    .catch(function(e) {
        console.log(e)
    });
    return res;
}
