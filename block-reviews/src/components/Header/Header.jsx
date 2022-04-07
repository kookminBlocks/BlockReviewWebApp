import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout_Url, MyPage_Url, StoreCreate_Url } from '../Commons/PathUrl'
import LoginCheck from '../Commons/IsLogin'
import styled from "styled-components";

function Header() {
    const [IsLogin, setlogin] = useState(LoginCheck());    
    const navi = useNavigate();    

    const Logout = () => {    
        localStorage.removeItem("user");
        navi("/");
    }
    const Route_Btn_Click = (url) => {
        navi(url);
    }
    
    useEffect(() => {
        if (LoginCheck()){
            setlogin(true)
        }
        else{
            setlogin(false)
        }
    });
    


    return (
        <>
            <HeaderComponent>
                <Logo onClick={() => navi("/")}>
                    <img src="https://swgs.kookmin.ac.kr/_res/kookmin/swgs/img/common/img-logo.png" alt="kookmin logo" />
                </Logo>

                {IsLogin ?
                <RouteBox>
                    <RouteBtn onClick={() => Route_Btn_Click(StoreCreate_Url)}>상점 등록</RouteBtn>
                    <RouteBtn onClick={() => Logout()} >Sign Out</RouteBtn>
                    <RouteBtn onClick={() => Route_Btn_Click(MyPage_Url)}>My</RouteBtn>
                </RouteBox>
                :
                null}
            </HeaderComponent>
        </>
    )
}

export default Header;

const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 15px;
`;

const Logo = styled.div`
    :hover{
        cursor: pointer;
    }
`;

const RouteBox = styled.div`
    display: flex;
`;

const RouteBtn = styled.div`
    border: none;
    background-color: white;
    margin: 0px 15px;
    :hover{
        cursor: pointer;
        font-weight: 600;
    }
`;