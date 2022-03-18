import React from 'react';
import styled from "styled-components";

function My(props) {

    const Review = [
        {id: 1, title : "Hello World", liked: 13, revenue: 5300, sale: false},
        {id: 2, title : "Hello World", liked: 13, revenue: 5300, sale: false},
        {id: 3, title : "Hello World", liked: 13, revenue: 5300, sale: true},
        {id: 4, title : "Hello World", liked: 13, revenue: 5300, sale: false},
        {id: 5, title : "Hello World", liked: 13, revenue: 5300, sale: false},
        {id: 6, title : "Hello World", liked: 13, revenue: 5300, sale: true},
        {id: 7, title : "Hello World", liked: 13, revenue: 5300, sale: false},
        {id: 8, title : "Hello World", liked: 13, revenue: 5300, sale: false},
        {id: 9, title : "Hello World", liked: 13, revenue: 5300, sale: false},
    ];

    return (
        <BigContainer>

        <MiddleContainer>

            {/* USER DATA */}
            
            <UserForm>
            <h1>유저정보</h1>
                <UserInfoBox>
                    <Label>아이디 :</Label>
                    <InputForm type="text" disabled/>
                </UserInfoBox>
                <UserInfoBox>
                    <Label>지갑 :</Label>
                    <InputForm type="text" disabled/>
                </UserInfoBox>
                <UserInfoBox>
                    <Label>휴대폰번호 :</Label>
                    <InputForm type="text" disabled/>
                </UserInfoBox>
                <UserInfoBox>
                    <Label>잔고(ETH) :</Label>
                    <InputForm type="text" disabled/>
                </UserInfoBox>
                <UserInfoBox>
                    <Label>잔고(REC) :</Label>
                    <InputForm type="text" disabled/>
                </UserInfoBox>
            </UserForm>



            {/* REVIEWS */}
            <ReviewForm>
            <h1>내가 쓴 리뷰</h1>
                <TableBox>
                    <Table>
                        <Thead>
                            <Thead_tr>
                                <Thead_td>ID</Thead_td>
                                <Thead_td>Title</Thead_td>
                                <Thead_td>Liked</Thead_td>
                                <Thead_td>창출수익</Thead_td>
                                <Thead_td>판매여부</Thead_td>

                            </Thead_tr>
                        </Thead>
                        <Tbody>
                            {Review.map((item, idx)=> (
                                <Tbody_tr key={idx} id={item.id}>
                                    <Tbody_td>{item.id}</Tbody_td>
                                    <Tbody_td>{item.title}</Tbody_td>
                                    <Tbody_td>{item.liked}</Tbody_td>
                                    <Tbody_td>{item.revenue}<span> REC</span></Tbody_td>
                                    <Tbody_td>{item.sale ? "O" : "X"}</Tbody_td>
                                </Tbody_tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableBox>
            </ReviewForm>

        </MiddleContainer>
    </BigContainer>
    )
}

export default My;

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
`
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const UserForm = styled.div`
    display: flex;
    flex-direction:  column;
    justify-content: space-between;
    width: 45vw;
    height: 600px;
    border: 1px solid lightgray;
    text-align: center;
`

const Label = styled.label`
    width: 15%;
    text-align: left;
    font-weight: 600;
    margin-right: 20px;
`;

const ReviewForm = styled.div`
    width: 40vw;
    height: 600px;
`

const UserInfoBox = styled.div`
    
`;

const InputForm = styled.input`
    width: 70%;
    border: none;
    border-bottom: 1px solid black;
    font-size: 18px;
    background-color: none;
`

const TableBox = styled.div`
    width: 100%;
    height: 60vh;
    border: 1px solid gray;
    overflow-y: scroll;
`;

const Table = styled.table`
    width: 100%;
    height: 100%;
    border-spacing: 0px;
`;

const Thead = styled.thead`
    user-select: none;
`;

const Thead_tr = styled.tr`
    background-color: black;
    color: white;
    height: 50px;
    font-weight: 800;
`;

const Thead_td = styled.td`
    &:nth-child(1){
        text-align: center;
        width: 100px;
    }
    &:nth-child(2){
        text-align: left;
        max-width: 250px;
    }
    &:nth-child(3){
        text-align: left;
        max-width: 250px;
    }
    &:nth-child(4){
        text-align: center;
        max-width: 100px;
    }
`;

const Tbody = styled.tbody`

`;

const Tbody_tr = styled.tr`
    width: 100%;
    height: 50px;
    &:hover{
        background-color: aliceblue;
        font-weight: 600;
        cursor: pointer;
    }
`;

const Tbody_td = styled.td`
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    border-bottom: 1px solid lightgray;

    &:nth-child(1){
        text-align: center;
        max-width: 100px;
        font-weight: ${r => r.rank < 4 ? "800":"700"};
        color: ${r => r.rank < 4 ? "red" : "black"}
    }
    &:nth-child(2){
        text-align: left;
        max-width: 250px;
    }
    &:nth-child(3){
        text-align: left;
        max-width: 250px;
    }
    &:nth-child(4){
        text-align: center;
        max-width: 100px;
    }
`;