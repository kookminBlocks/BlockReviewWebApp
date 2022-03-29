import '../../scss/Login.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import github from '../../images/github.png'

function AddStore(storeId) {
    const store = {Name:"가게", description: "설명", cate1:"음식점", cate2:"브런치 카페", thumbnail : {github}, Phone:"0100000000", address:"경기도 성남시 샬라샬라"}
    

    const Btn_Create_Click = () => {
        
    }

    return (
        <div className='d-flex flex-column align-items-center' style={{marginTop:"30px"}}>
            <h3>{store.Name}</h3>
            <img width="100%" height="200px" src={store.thumbnail}/>            
            <div className='description' dangerouslySetInnerHTML={{ __html: store.description }}></div>
            <div className='address'>{store.address}</div>
            
            {/* 이곳에 리뷰 등록 폼 / 조회 리스트 쭈욱~ */}
        </div>
    )
}

export default AddStore;

