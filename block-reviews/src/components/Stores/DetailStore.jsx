import '../../scss/Login.scss'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import StoreReview from "./sections/StoreReview";
import { GetReviewByStore } from "../../api/review"

function DetailStore(props) {
    const { storeId } = useParams();
    const [ReviewData, setReviewData] = useState(null);
    const navi = useNavigate();
    const store = {Name:"가게", description: "설명", cate1:"음식점", cate2:"브런치 카페", thumbnail : "asdfsaf", Phone:"0100000000", address:"경기도 성남시 샬라샬라"}

    const garaReview = [
        {id: 1, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
        {id: 2, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
        {id: 3, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: false },
        {id: 4, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
        {id: 5, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: false },
        {id: 6, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
    ]

    useEffect(async () => {
        const res = await GetReviewByStore(storeId);
        if(res.data.success){
            setReviewData(res.data.payload);
        } else {
            alert("리뷰데이터조회실패");
        }
    }, [])
    

    const Btn_Create_Click = () => {
        
    }

    return (
        <div className='d-flex flex-column align-items-center' style={{marginTop:"30px"}}>
            <h3>{store.Name}</h3>
            <div className='description' dangerouslySetInnerHTML={{ __html: store.description }}></div>
            <div className='address'>{store.address}</div>
            <button onClick={() => {
                navi(`/review/write/${storeId}`);
            }}>글쓰기</button>
            {/* 이곳에 리뷰 등록 폼 / 조회 리스트 쭈욱~ */}
            <StoreReview review={ReviewData}/>
        </div>
    )
}

export default DetailStore;