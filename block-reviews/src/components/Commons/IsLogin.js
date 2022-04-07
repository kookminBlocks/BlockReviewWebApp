function isLogin(){
    return(
        !!localStorage.getItem('user')
    )
};

export default isLogin;