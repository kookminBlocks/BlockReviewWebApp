import api from  './apiClient'


// 카테고리 목록 가져오기
export const GetCategory = async (level,parentId) => {    
    const res = await api.get('/Category/Get/' + level + '/' + parentId)
    .catch(function(e) {
        console.log(e)
    });

    return res;
}
