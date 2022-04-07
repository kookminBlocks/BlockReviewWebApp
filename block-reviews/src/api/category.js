import api from  './apiClient'


// 카테고리 레벨 기준으로 목록 가져오기
export const GetByLevel = async (level) => {    
    const res = await api.get('/Category/GetByLevel/' + level)
    .catch(function(e) {
        console.log(e)
    });

    return res;
}


// 카테고리 부모 아이디 기준으로 가져오기
export const GetByParentId = async (parentId) => {    
    const res = await api.get('/Category/GetByParentId/' + parentId)
    .catch(function(e) {
        console.log(e)
    });

    return res;
}
