import api from  './apiClient'

// 계정 생성
export const RegisterAPICall = async (userinfo) => {
    console.log(userinfo)

    const res = await api.post('/User/Register', {                       
        id:userinfo.Id,
        Password:userinfo.Pwd,
        Name : userinfo.NickName,
        Email : userinfo.Email,
        UserType : parseInt(userinfo.UserType),
        Phone : userinfo.Phone,        
    }, {responseType: 'blob'})       
    .catch(function(e) {
        console.log(e)
    });
    return res;
}

// 로그인 API 호출
export const LoginAPICall = async (userinfo) => {
    console.log(userinfo)
    
    const res = api.post('/User/Login', {                       
        AccountPrivateKey: userinfo.PrivateKey,
        AccountPublicKey : userinfo.PublicKey,
        id:userinfo.Id,
        Password : userinfo.Pwd,   
    })
    .catch(function(e) {
        console.log(e.response)
    });

    return res;
}