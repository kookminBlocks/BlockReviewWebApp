import React from 'react'
import styled from 'styled-components';

function UserForm__My(props) {

    const logout = () => {
        console.log("로그아웃");
    }
    return (
        <>
        <h1>내 정보</h1>
            <UserForm>
                <UserInfoBox>
                    <UserInfo_Label>Address : </UserInfo_Label>
                    <UserInfo_Content>Account Public Key</UserInfo_Content>
                </UserInfoBox>
                <UserInfoBox>
                    <UserInfo_Label>Email : </UserInfo_Label>
                    <UserInfo_Content>User Email</UserInfo_Content>
                </UserInfoBox>
                <UserInfoBox>
                    <UserInfo_Label>NickName : </UserInfo_Label>
                    <UserInfo_Content>User Nickname</UserInfo_Content>
                </UserInfoBox>
                <UserInfoBox>
                    <UserInfo_Label>Phone : </UserInfo_Label>
                    <UserInfo_Content>User Phone Number</UserInfo_Content>
                </UserInfoBox>
                <UserInfoBox>
                    <UserInfo_Label>BRC : </UserInfo_Label>
                    <UserInfo_Content>BRC TOken Balance</UserInfo_Content>
                </UserInfoBox>
                <UserInfoBox>
                    <UserInfo_Label>ETH : </UserInfo_Label>
                    <UserInfo_Content>Ethereum Balance</UserInfo_Content>
                </UserInfoBox>
                
                <div style={{ textAlign: "center" }}>
                    <Button onClick={logout}>LOGOUT</Button>
                </div>
            </UserForm>
        </>
    )
}

export default UserForm__My;


const UserForm = styled.div`
    display: flex;
    flex-direction:  column;
    justify-content: space-around;
    width: 80%;
    height: 60vh;
    border: 1px solid lightgray;
    overflow: hidden;
    padding: 20px;
`;

const UserInfoBox = styled.div`
    display: flex;
    font-size: 20px;
`;

const UserInfo_Label = styled.label`
    font-weight: 600;
    width: 250px;
    text-align: left;
`;

const UserInfo_Content = styled.div`
    width: 100%;
    text-overflow: ellipsis;
`;


const Button = styled.button`
    align-items: center;
    padding: 13px 0 13px;
    width: 80%;
    color: white;
    background-color: black;
    border-radius: 10px;
    :hover {
        cursor: pointer;
        color: red;
    }

`
