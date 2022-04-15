import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateReview } from "../../api/review";
import { UploadFile, ReturnFileBaseUrl }  from  '../../api/uploader'
import { UploadIpfs } from '../../api/contract'
import Spinner from "../Utils/Spinner";
import html2canvas from 'html2canvas'

function WriteReview(props) {
    const { storeId } = useParams();
    const [Title_Input, setTitle_Input] = useState("");
    const [Description_Input, setDescription_Input] = useState("");
    const [ImgUrl, setImgUrl] = useState("");
    const [nftUrl, nftUrlChanged] = useState("");
    const [WalletFile, FileChanged] = useState(null);
    const [SpinnerFlag, setSpinnerFlag] = useState(false);
    const [ThumbURL, ThumbURLChanged] = useState('Nothing');
    var [storeTumb, TumbNailChanged] = useState(null);
    const navi = useNavigate();

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0){
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        // 마임타입 추출
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type:mimeString});
    }

    //작성버튼
    const handleSubmit = async (e) => {        
        setSpinnerFlag(true);

        await html2canvas(document.getElementById("myreview"))
            .then(async canvas => {
                const formData = new FormData();
                if (canvas){
                    formData.append("file", dataURItoBlob(canvas.toDataURL('image/png')));
                    formData.append("title", new Blob([JSON.stringify(Title_Input)], {type: "application/json"}));
                    formData.append("description", new Blob([JSON.stringify(Description_Input)], {type: "application/json"}));
                }
                console.log(formData)
                var res = await UploadIpfs(formData);                          
                
                console.log(res)

                // 유저정보읽기 
                let user = JSON.parse(localStorage.getItem('user'));
        
                const payload = {
                    UserId: user.id,
                    CategoryId: "c468c561-a65d-11ec-90a3-02005c5fdd88",
                    StoreId: storeId,
                    Title: Title_Input,
                    Content: Description_Input,
                    ThumbNail: ThumbURL,
                    NftUrl: res.data.payload[0].hash,
                    User: {
                        AccountPrivateKey: user.accountPrivateKey,
                        AccountPublicKey: user.accountPublicKey
                    }
                }
                console.log(payload);
                const res2 = await CreateReview(payload);
        
                if(res2.status !== 200){
                    alert("리뷰작성실패");
                } else {
                    navi("/store/detail/"+storeId);
                    alert("리뷰작성성공");
                }
        
            }
        );
    
        setSpinnerFlag(false);
    };
    
    const onImageChanged = async (e) => {
        e.preventDefault();
        const formData = new FileReader();               
        
        // api 호출
        const file = e.target.files[0];                                        
        const res = await UploadFile(file);        
        console.log(res);

        if(res.status == 200){            
            console.log(res);
            ThumbURLChanged(ReturnFileBaseUrl + res.data)
        }

        // 미리보기
        formData.onloadend = () => {
            TumbNailChanged(formData.result);
        };
        formData.readAsDataURL(file);        
      
        // TumbNailChanged(formData);
    }

    //취소버튼
    const handleCancel = (e) => {
        if(window.confirm("취소된 글은 저장되지 않습니다. 계속하시겠습니까?") === true) {
            console.log(`페이지 벗어나기`);
            navi(-1);
        }
    }; 

    return (
       <Form id="myreview">
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
                <div>
                    <img
                    alt="대표이미지"
                    src={storeTumb}
                    style={{ margin: "auto", width: "100px", height: "100px" }}
                  />
                    <input type={'file'} accept='image/*' name='file' onChange={onImageChanged}/>
                </div>
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