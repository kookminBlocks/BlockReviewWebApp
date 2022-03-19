import '../../scss/Login.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function AddStore() {
    var [storeTitle, titleChanged] = useState(null);
    var [storeDesc, DescChanged] = useState(null);
    var [storeCate1, Cate1Changed] = useState(null);
    var [storeCate2, Cate2Changed] = useState(null);
    var [buisnessNum, buisnessNumChanged] = useState(null);
    var [storePhone, PhoneChanged] = useState(null);
    var [location, locationChanged] = useState(null);

    const CateLevel1List = []
    const CateLevel2List = []
 


    const Btn_Create_Click = () => {
        
    }

    return (
        <div className='d-flex flex-column align-items-center' style={{marginTop:"30px"}}>
            <h3>지점 등록</h3>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    지점명
                </div>
                <div>
                    <input className='form-control' placeholder='지점명을 입력해주세요' onChange={(e) => { titleChanged(e.target.value) }} type={"text"} />
                </div>
            </div>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    지점 소개
                </div>
                <div>
                    <input className='form-control' placeholder='업장을 소개해주세요' onChange={(e) => { PhoneChanged(e.target.value) }} type={"text"} />
                </div>
            </div>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    지점 전화번호
                </div>
                <div>
                    <input className='form-control' placeholder='전화 번호를 입력해주세요 (-없이 입력해주세요)' onChange={(e) => { buisnessNumChanged(e.target.value) }} type={"text"} />
                </div>
            </div>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    사업자 번호
                </div>
                <div>
                    <input className='form-control' placeholder='사업자 번호를 입력해주세요' onChange={(e) => { buisnessNumChanged(e.target.value) }} type={"text"} />
                </div>
            </div>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    지점 위치
                </div>
                <div>
                    <input className='form-control' placeholder='주소를 입력해주세요'  type={"text"} />
                    <input className='form-control' placeholder='상세주소를 입력해주세요' onChange={(e) => { locationChanged(e.target.value) }} type={"text"} />
                </div>
            </div>
            <div className='d-flex align-items-center  mb-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    업종
                </div>
                <div>
                    <select style={{width:"300px"}} onChange={(e) => { Cate1Changed(e.target.value)}} class="form-select" id="validationCustom04" required>
                            <option selected disabled value={-1}>업종을 선택해주세요</option>                         
                    </select>  
                    <select style={{width:"300px"}} onChange={(e) => { Cate2Changed(e.target.value)}} class="form-select" id="validationCustom04" required>
                            <option selected disabled value={-1}>상세 업종을 선택해주세요</option>                         
                    </select>  
                </div>
            </div>    

            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary m-2' onClick={Btn_Create_Click}>지점 등록</button>                
            </div>
        </div>
    )
}

export default AddStore;

