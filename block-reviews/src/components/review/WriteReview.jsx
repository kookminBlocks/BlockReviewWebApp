import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CreateReview } from "../../api/review";
import Spinner from "../Utils/Spinner";

function WriteReview(props) {
    const [Title_Input, setTitle_Input] = useState("");
    const [Description_Input, setDescription_Input] = useState("");
    const [ImgUrl, setImgUrl] = useState("");
    const [WalletFile, FileChanged] = useState(null);
    const [SpinnerFlag, setSpinnerFlag] = useState(false);
    const navi = useNavigate();

    //작성버튼
    const handleSubmit = async(e) => {
        setSpinnerFlag(true);
        // 유저정보읽기 
        let user = JSON.parse(localStorage.getItem('user'));

        const payload = {
            UserId: user.id,
            CategoryId: "c468c561-a65d-11ec-90a3-02005c5fdd88",
            StoreId: "test",
            Title: Title_Input,
            Content: Description_Input,
            User: {
                AccountPrivateKey: user.accountPrivateKey,
                AccountPublicKey: user.accountPublicKey
            }
        }
        console.log(payload);
        const result = await CreateReview(payload);
        console.log(result);
        setSpinnerFlag(false);
    };
    
    //취소버튼
    const handleCancel = (e) => {
        if(window.confirm("취소된 글은 저장되지 않습니다. 계속하시겠습니까?") === true) {
            console.log(`페이지 벗어나기`);
            navi(-1);
        }
    };

    // Img S3 - 이미지 저장 API받아서 적용시킬 것. Return된 Image URL을 setImgUrl State에 담아라!
    const handleImg = async (e) => {
        const img = e.target.files[0];
        if(img){
            console.log(img);
        }
    }

    return (
       <Form>
        {SpinnerFlag ? 
            <div style={{ width: "100%", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Spinner /> 
            </div>
        :
        <>
            <Title>리뷰작성</Title>

            <TitleInput type="text" placeholder="Title" value={Title_Input} onChange={e => setTitle_Input(e.currentTarget.value)} />
            <DescriptionTextarea placeholder="Description" value={Description_Input} onChange={e => setDescription_Input(e.currentTarget.value)} />
            <UploadBox>
                <Label>대표이미지 설정 :</Label>
                <input type="file" onChange={handleImg} />
                {ImgUrl &&
                    ImgUrl ?
                        <ImgBox>
                            <Img src={ImgUrl} />
                        </ImgBox>
                        :
                        <>
                        </>
                }
            </UploadBox>

            <FunctionBtnBox>
                <Btn onClick={handleCancel}>취소</Btn>
                <Btn onClick={handleSubmit}>확인</Btn>
            </FunctionBtnBox>
        </>
        }
        
       </Form>
    )
}

export default WriteReview;


const Form = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 5rem;
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
    width: 100px;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: white;
    &:hover{
        cursor: pointer;
        background-color: ghostwhite;
    }
`;

const UploadBox = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 15px 0px;
`;

const Label = styled.label`
    font-weight: 600;
    margin-right: 15px;
`;

const Img = styled.img`
    width: 100%;
`;

const ImgBox = styled.div`
    width: 40px;
    height: 40px;
    object-fit: cover;
    overflow: hidden;
`;