import React, {useState, useEffect } from 'react'
import styled from 'styled-components';

function WriteReview(props) {
    const [Title_Input, setTitle_Input] = useState("");
    const [Description_Input, setDescription_Input] = useState("");
    
    //작성버튼
    const handleSubmit = (e) => {
        console.log("작성완료");
    };
    
    //취소버튼
    const handleCancel = (e) => {
        if(window.confirm("취소된 글은 저장되지 않습니다. 계속하시겠습니까?") === true) {
            console.log(`페이지 벗어나기`);
        }
    };
        
    return (
       <Form>
        <Title>리뷰작성</Title>

        <TitleInput type="text" placeholder="Title" value={Title_Input} onChange={e => setTitle_Input(e.currentTarget.value)} />
        <DescriptionTextarea placeholder="Description" value={Description_Input} onChange={e => setDescription_Input(e.currentTarget.value)} />
        
        <FunctionBtnBox>
            <Btn onClick={handleCancel}>취소</Btn>
            <Btn onClick={handleSubmit}>확인</Btn>
        </FunctionBtnBox>
       </Form>
    )
}

export default WriteReview;

const Form = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.h1`

`;

const TitleInput = styled.input`
    width: 80%;
    border: none;
    border-bottom: 1px solid lightgray;
    &:focus{
        outline: none;
    }
    margin-bottom: 10px;
`;

const DescriptionTextarea = styled.textarea`
    width: 80%;
    height: 200px;
    border: none;
    border: 1px solid lightgray;
    &:focus{
        outline: none;
    }
    margin-bottom: 10px;
`;

const FunctionBtnBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`;

const Btn = styled.button`
    border: 1px solid lightgray;
    background-color: white;
    &:hover{
        cursor: pointer;
        background-color: ghostwhite;
    }
`;
