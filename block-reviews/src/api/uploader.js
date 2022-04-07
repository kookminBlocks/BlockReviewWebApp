import { v4 as uuidv4 } from 'uuid';
import api from  './apiClient'

// 이미지 파일 업로드
export const UploadFile = async (file) => {    
    const res = await api.post('/File/Upload', {                       
        file: file   
    })       
    .catch(function(e) {
        console.log(e)
    });
    return res;
}
