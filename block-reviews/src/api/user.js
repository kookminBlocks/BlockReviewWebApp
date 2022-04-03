import { Navigate, useNavigate } from "react-router-dom";
import api from  './apiClient'

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