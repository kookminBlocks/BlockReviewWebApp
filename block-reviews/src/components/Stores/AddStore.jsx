import '../../scss/Login.scss'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { CreateStore }  from  '../../api/store'
import { GetCategory }  from  '../../api/category'

function AddStore() {
    const navigate = useNavigate();
    // 이미지 미리보기
    var [storeTumb, TumbNailChanged] = useState(null);

    var [storeTitle, titleChanged] = useState(null);
    var [storeDesc, DescChanged] = useState(null);
    var [storeCate1, Cate1Changed] = useState(null);
    var [storeCate2, Cate2Changed] = useState(null);
    var [storeTumbNail, TumbNailChange] = useState(null);
    var [buisnessNum, buisnessNumChanged] = useState(null);
    var [storePhone, PhoneChanged] = useState(null);
    var [location, locationChanged] = useState(null);
    
    const CateLevel1List = []
    const CateLevel2List = []     

    useEffect(async () => {
        var res = await GetCategory(1, null);
        if (res.status == 200){
            console.log(res.data);
        }
    },[]);

    const onImageChanged = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        TumbNailChange(formData);
    }

    const Btn_Create_Click = async () => {
        const user = localStorage.getItem('user');

        const inputStore = {
            UserId : user.Id,
            CategoryId: storeCate2,
            ThumbNail:storeTumbNail,
            Name: storeTitle,
            Description: storeDesc,
            Phone: storePhone,
            BuisnessNumber:buisnessNum
        }

        const res = await CreateStore(inputStore);
        if (res.status == 200){
            navigate('/store/list')
        }
        else{
            alert('지점 등록에 실패하였습니다.')
        }
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
                    <input className='form-control' placeholder='업장을 소개해주세요' onChange={(e) => { DescChanged(e.target.value) }} type={"text"} />
                </div>
            </div>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    지점 대표사진
                </div>
                <div>
                    <img
                    alt="sample"
                    src={storeTumb}
                    style={{ margin: "auto" }}
                  />
                    <input type={'file'} accept='image/*' name='file' onChange={onImageChanged}/>
                </div>
            </div>
            <div className='d-flex align-items-center mb-3 mt-3'>
                <div style={{ width: "150px", marginRight: "5px" }}>
                    지점 전화번호
                </div>
                <div>
                    <input className='form-control' placeholder='전화 번호를 입력해주세요 (-없이 입력해주세요)' onChange={(e) => { PhoneChanged(e.target.value) }} type={"text"} />
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
                            <option disabled value={-1}>업종을 선택해주세요</option>                         
                    </select>  
                    <select style={{width:"300px"}} onChange={(e) => { Cate2Changed(e.target.value)}} class="form-select" id="validationCustom04" required>
                            <option disabled value={-1}>상세 업종을 선택해주세요</option>                         
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

