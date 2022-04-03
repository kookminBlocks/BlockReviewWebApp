import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Header(props) {
    const navi = useNavigate();

    const route = (e) => {
        const routeTo = e.currentTarget.className.split(" ")[2];
        navi(routeTo);
    }

    return (
        <HeaderComponent>
            <Logo onClick={()=> navi("/")}>
                <img src="https://swgs.kookmin.ac.kr/_res/kookmin/swgs/img/common/img-logo.png" alt="kookmin logo"/>
            </Logo>

            <RouteBox>
                <RouteBtn onClick={route} className="/review/write">리뷰작성</RouteBtn>
                <RouteBtn onClick={route} className="/store">상점등록하기</RouteBtn>
                <RouteBtn onClick={route} className="/register">회원가입</RouteBtn>
                <RouteBtn onClick={route} className={`/my/:userId`}>My</RouteBtn>
                <RouteBtn onClick={route} className="/register">LOG-IN</RouteBtn>
            </RouteBox>
ss
        </HeaderComponent>
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