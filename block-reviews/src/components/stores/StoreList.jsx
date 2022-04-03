import '../../scss/Login.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function AddStore() {
    const [stores, storeChanged] = useState([])    
    
    useEffect(() => {
        axios.get('https://localhost:44387/api/Stores/Get')
        .then(res => {     
            if (res.status == 200) {
                localStorage.getItem('user')
            }
            else{
                console.log('store 데이터가 없습니다.')
            }
        })
        .catch(function() {
        });        
    },[])    


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
                <div>
                    등록된 지점이 없습니다.
                </div>
            }
        </>
    )
}

function CardItem(props){
    return(
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={props.store.ThumbNail} alt="스토어 이미지"/>
            <div class="card-body">
                <h5 class="card-title">{props.store.NAME}</h5>
                <p class="card-text">{props.store.Description}</p>                
            </div>
        </div>        
    )
}



export default AddStore;

