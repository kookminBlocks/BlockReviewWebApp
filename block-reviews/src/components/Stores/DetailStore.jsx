import '../../scss/Login.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import styled from "styled-components";
import StoreReview from "./sections/StoreReview";

function AddStore(storeId) {
    const store = {Name:"가게", description: "설명", cate1:"음식점", cate2:"브런치 카페", thumbnail : {github}, Phone:"0100000000", address:"경기도 성남시 샬라샬라"}

    
    const garaReview = [
        {id: 1, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
        {id: 2, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
        {id: 3, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: false },
        {id: 4, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
        {id: 5, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: false },
        {id: 6, title: "이 가게 짱 조아여", description : "이 가게는 ㅇㅇㅇㅇ가 매우 좋고 ~~ 맛도 아주좋고 ~~", liked : 34, earning: 1234324, sale: true },
    ]

    const Btn_Create_Click = () => {
        
    }

    return (
        <div className='d-flex flex-column align-items-center' style={{marginTop:"30px"}}>
            <h3>{store.Name}</h3>
            <div className='description' dangerouslySetInnerHTML={{ __html: store.description }}></div>
            <div className='address'>{store.address}</div>
            
            {/* 이곳에 리뷰 등록 폼 / 조회 리스트 쭈욱~ */}
            <StoreReview garaReview={garaReview}/>
        </div>
    )
}

export default AddStore;