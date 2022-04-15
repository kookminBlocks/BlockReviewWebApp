import '../../scss/Login.scss'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { CreateStore }  from  '../../api/store'
import { UploadFile, ReturnFileBaseUrl }  from  '../../api/uploader'
import { GetByLevel, GetByParentId }  from  '../../api/category'

function AddStore() {
    const navigate = useNavigate();
    // 이미지 미리보기
    var [storeTumb, TumbNailChanged] = useState(null);

    var [storeTitle, titleChanged] = useState(null);
    var [storeDesc, DescChanged] = useState(null);
    var [storeCate1, Cate1Changed] = useState(null);
    var [storeCate2, Cate2Changed] = useState(null);
    var [storeTumbNail, ThumbURL] = useState('Nothing');

    // api에 보낼 이미지
    var [thumbNailFile, thumbChanged] = useState(null);
    var [buisnessNum, buisnessNumChanged] = useState(null);
    var [storePhone, PhoneChanged] = useState(null);
    var [location, locationChanged] = useState(null);
    
    const [CateLevel1List, SetCate1] = useState([])
    
    const [CateLevel2List, SetCate2] = useState([])

    useEffect(async () => {
        var res = await GetByLevel(1);
        if (res.status == 200){
            SetCate1(res.data)
            console.log(CateLevel1List)
        }
    },[]);

    const cbx_cate1_changed = async (e) => {
        Cate1Changed(e);

        const res = await GetByParentId(e);
        if (res.status == 200){
            SetCate2(res.data);
        }
        else
        {
            SetCate2(null);
        }
    }

    const onImageChanged = async (e) => {
        e.preventDefault();
        const formData = new FileReader();               
        
        // api 호출
        const file = e.target.files[0];                                
        thumbChanged(file);
        const res = await UploadFile(file);        
        console.log(res);

        if(res.status == 200){            
            console.log(res);
            ThumbURL(await ReturnFileBaseUrl() + res.data)
        }

        // 미리보기
        formData.onloadend = () => {
            TumbNailChanged(formData.result);
        };
        formData.readAsDataURL(file);        
      
        // TumbNailChanged(formData);
    }

    const Btn_Create_Click = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        const inputStore = {
            UserId : user.id,            
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
                    style={{ margin: "auto", width: "100px", height: "100px" }}
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
                    <select defaultValue={-1} style={{width:"300px"}} onChange={(e) => { cbx_cate1_changed(e.target.value)}} className="form-select mb-1" id="validationCustom04" required>
                        <option value={-1}>업종을 선택해주세요</option>                         
                        {
                            CateLevel1List.map((e, key) => {
                                return(
                                    <option value={e.id}>{e.title}</option>
                                )
                            })
                        }
                    </select>  
                    <select defaultValue={-1} style={{width:"300px"}} onChange={(e) => { Cate2Changed(e.target.value)}} className="form-select" id="validationCustom04" required>
                            <option value={-1}>상세 업종을 선택해주세요</option>                         
                            {
                                CateLevel2List.map((e, key) => {
                                    return(
                                        <option value={e.id}>{e.title}</option>
                                    )
                                })
                            }
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

