import React from "react";
import '../../scss/Login.scss'
import { useState, useEffect } from 'react';
import { GetStores }  from  '../../api/store'
import { useNavigate } from "react-router-dom";


function StoreList() {
    const [stores, storeChaned] = useState([])    
    
    useEffect(async () => {
        const res = await GetStores();
        if (res.status == 200)
        {
            console.log(res.data)
            storeChanged(res.data)
        }
        else{
            
        }
    },[])    
    //     
    // },[])    


    return (
        <>
            {            
                stores.length > 0 ?            
                <div className='d-flex flex-wrap'>
                    {
                        stores.map((item, idx) => {
                            return(
                                <CardItem store={item}/>
                            )
                        })
                    }
                </div>
                :
                <p>
                    등록된 지점이 없습니다.
                </p>
            }
        </>
    )
        }  

function CardItem(props){
    const navigate = useNavigate();

    const Btn_Click_Card = (e) => {
        navigate('/store/detail' + e);
    }

    return(
        <div className="card" onClick={() => Btn_Click_Card(props.store.id)}>
            <img className="card-img-top" src={props.store.ThumbNail} alt="스토어 이미지"/>
            <div className="card-body">
                <h5 className="card-title">{props.store.name}</h5>
                <p className="card-text">{props.store.description}</p>                
            </div>
        </div>        
    )
}



export default StoreList;

