import '../../scss/Login.scss'
import { useState, useEffect } from 'react';
import { GetStores }  from  '../../api/store'


function StoreList() {
    const [stores, storeChanged] = useState([])    
    
    // useEffect(async () => {
    //     const res = await GetStores();
    //     if (res.status == 200)
    //     {
    //         storeChanged(res.data)
    //     }
    //     else{
            
    //     }
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



export default StoreList;

