import '../../scss/Login.scss'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import StoreReview from "./sections/StoreReview";
import { GetReviewByStore } from "../../api/review"
import { GetStoreById } from "../../api/store"


function DetailStore(props) {
    const navi = useNavigate();

    const { storeId } = useParams();
    const [ store, storeChanged ] = useState(null);
    const [ReviewData, setReviewData] = useState(null);

    useEffect(async () => {
        const storeRes  = await GetStoreById(storeId);        
        if(storeRes.status == 200){
            console.log(storeRes.data);
            storeChanged(storeRes.data);

            const res = await GetReviewByStore(storeId);
            if (res.data.success){
                setReviewData(res.data.payload);
                console.log(ReviewData);
            }
        } else {
            alert("리뷰데이터조회실패");
        }
    }, [])       

    const LikeClicked_Callback = async () => {
        const res = await GetReviewByStore(storeId);
        if (res.data.success){
            setReviewData(res.data.payload);
        }
    }

    return (
        <div>
            <div className='d-flex mb-3' style={{ marginTop: "30px", marginLeft:"250px" }}>
                <img alt src={store?.thumbNail} width={'150px'} height={'150px'}/>
                <div style={{marginLeft:"30px"}}>
                    <h3>{store?.name}</h3>
                    <div className='description' dangerouslySetInnerHTML={{ __html: store?.description }}></div>
                    <div className='address'>{store?.address}</div>
                </div>

                {/* 이곳에 리뷰 등록 폼 / 조회 리스트 쭈욱~ */}
            </div>
            <button className='btn btn-primary mb-5' style={{marginLeft:"250px"}} onClick={() => {
                navi(`/review/write/${storeId}`);
            }}>리뷰작성</button>
            <div className='text-center'>
                {
                    ReviewData?.length > 0 ?
                    <StoreReview review={ReviewData} like_click={LikeClicked_Callback}/>                    
                    : <h3>등록된 리뷰가 없습니다.</h3>
                }                
            </div>
        </div>
    )
}

export default DetailStore;