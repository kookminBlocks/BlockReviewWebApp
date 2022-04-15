import { v4 as uuidv4 } from 'uuid';
import api from  './apiClient'

// 이미지 파일 업로드
export const UploadFile = async (file) => {    
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);

    const res = await api.post('/File/Upload',
        formData
    )    
    .catch(function(e) {
        console.log(e)
    });
    return res;
}
