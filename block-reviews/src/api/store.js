import { v4 as uuidv4 } from 'uuid';
import api from  './apiClient'

// 스토어 등록
export const CreateStore = async (store) => {
    console.log(store)

    const res = await api.post('/Store/Create', {                       
        Id: uuidv4(),
        UserId: store.UserId,
        CategoryId : store.CategoryId,
        ThumbNail : store.ThumbNail,
        Name : store.Name,
        Description : store.Description,        
        Phone : store.Phone,        
        BuisnessNumber : store.BuisnessNumber,        
    })       
    .catch(function(e) {
        console.log(e)
    });
    return res;
}

// 스토어 목록 가져오기
export const GetStores = async () => {    
    const res = await api.get('/Store/Get')
    .catch(function(e) {
        console.log(e)
    });

    return res;
}

// UserId 기준으로 스토어 목록 가져오기
export const GetStoresByUserId = async (userId) => {    

    const res = await api.get('/Store/GetByUser/' + userId)       
    .catch(function(e) {
        console.log(e)
    });

    return res;
}

// 스토어 아이디 기준으로 가져오기
export const GetStoreById = async (storeId) => {

    const res = await api.get('/Store/Detail/'+  storeId)
    .catch((e) => {
        console.log(e);
    });

    return res;
}
