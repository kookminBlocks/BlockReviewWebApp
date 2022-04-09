import React, { useEffect, useState } from 'react'
import styled from "styled-components";

function ReviewForm(props) {
    return (
            <Container>
            <h1 style={{ textAlign: "center", fontWeight: "800" }}>나의 리뷰</h1>
                <Table>
                    {/* Head */}
                    <Thead>
                        <Thead_div>ID</Thead_div>
                        <Thead_div>Title</Thead_div>
                        <Thead_div>Liked</Thead_div>
                        <Thead_div>Price</Thead_div>
                        <Thead_div>창출수익</Thead_div>
                        <Thead_div>판매등록</Thead_div>
                        <Thead_div>판매철회</Thead_div>
                    </Thead>

                {props.review.length > 0 ?
                    props.review.map((item, idx)=> (
                        <Tbody key={idx}>
                            <>
                                <Tbody_div>{item.idx}</Tbody_div>
                                <Tbody_div>{item.title}</Tbody_div>
                                <Tbody_div>0</Tbody_div>
                                <Tbody_div>{item.price ? item.price:"미판매"}</Tbody_div>
                                <Tbody_div>(liked * 100) * 0.8)</Tbody_div>
                                <Tbody_div>
                                    <FunctionalBtn>등록</FunctionalBtn>
                                </Tbody_div>
                                <Tbody_div>
                                    <FunctionalBtn>철회</FunctionalBtn>
                                </Tbody_div>
                            </>
                        </Tbody>
                    ))
                :
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div>작성된 리뷰가 없습니다.</div>
                </div>
                }
            </Table>
        </Container>   

    )
}

export default ReviewForm



const Container = styled.div`
    width: 80%;
    margin-top: 20px;
`;

const Table = styled.div`
    width: 100%;
    height: 50vh;
    overflow-y: scroll;
    border: 1px solid lightgrey;
    opacity: ${r => r.flag ? "0.1":"1"};
`;

const Thead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    font-weight: 600;
    border-bottom: 1px solid gray;
`;

const Thead_div = styled.div`
    text-align: center;
    :nth-child(1){
        width: 5%;
    }
    :nth-child(2){
        width: 20%;
    }
    :nth-child(3){
        width: 10%;
    }
    :nth-child(4){
        width: 20%;
    }
    :nth-child(5){
        width: 20%;
    }
    :nth-child(6){
        width: 12.5%;
    }
    :nth-child(7){
        width: 12.5%;
    }
`;

const Tbody = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
        background-color: lightgrey;
        cursor: pointer;
    }
`;

const Tbody_div = styled.div`
    text-align: center;
    :nth-child(1){
        width: 5%;
    }
    :nth-child(2){
        width: 20%;
    }
    :nth-child(3){
        width: 10%;
    }
    :nth-child(4){
        width: 20%;
    }
    :nth-child(5){
        width: 20%;
    }
    :nth-child(6){
        width: 12.5%;
    }
    :nth-child(7){
        width: 12.5%;
    }
`;


const FunctionalBtn = styled.button`
    background-color: ghostwhite;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    :hover{
        cursor:pointer;
        opacity: 0.6;
    }
`;