import '../../scss/Login.scss'
import {useState} from 'react';
import { Form, Container, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { IdCheck } from "../../api/login"

const errorMsg = {
    'empty' : '메일 주소를 입력해주세요',
    'exist_email': '이미 등록된 메일입니다. 다른 메일을 입력해주세요',
}

function Register(){       
    let [Id, IdChanged] = useState(null) 
    let [Pwd, PwdChanged] = useState(null) 
    let [Email, EmailChanged] = useState(null) 
    let [Phone, PhoneChanged] = useState(null) 
    let [UserType, UserTypeChanged] = useState(-1) 

    const Btn_Register_Click = () => {
        
    }

    return(
        <div className='Register-Layout'>
                <div className='content-layout'>
                <h2>회원 가입</h2>
                <div className='d-flex align-items-center mb-3 mt-3'>
                    <div style={{ width: "150px", marginRight: "5px" }}>
                        ID
                    </div>
                    <div>
                        <input style={{minWidth:"300px"}} className='form-control' placeholder='아이디를 입력해주세요' onChange={(e) => { IdChanged(e.target.value) }} type={"text"} />
                    </div>
                </div>
                <div className='d-flex align-items-center  mb-3'>
                    <div style={{ width: "150px", marginRight: "5px" }}>
                        PassWord
                    </div>
                    <div>
                        <input style={{minWidth:"300px"}} className='form-control' placeholder='비밀번호를 입력해주세요' onChange={(e) => { PwdChanged(e.target.value) }} type={"password"} />
                    </div>
                </div>
                <div className='d-flex align-items-center  mb-3'>
                    <div style={{ width: "150px", marginRight: "5px" }}>
                        핸드폰 번호
                    </div>
                    <div>
                        <input style={{minWidth:"300px"}} className='form-control' placeholder='핸드폰 번호 - 없이 입력해주세요' onChange={(e) => { PhoneChanged(e.target.value) }} type={"text"} />
                    </div>
                </div>
                <div className='d-flex align-items-center  mb-3'>
                    <div style={{ width: "150px", marginRight: "5px" }}>
                        이메일
                    </div>
                    <div>
                        <input style={{minWidth:"300px"}} className='form-control' placeholder='이메일 입력해주세요' onChange={(e) => { EmailChanged(e.target.value) }} type={"email"} />
                    </div>
                </div>
                <div className='d-flex align-items-center  mb-3'>
                    <div style={{ width: "150px", marginRight: "5px" }}>
                        사용자 타입
                    </div>
                    <div>
                        <select style={{minWidth:"300px"}} onChange={(e) => { UserTypeChanged(e.target.value)}} class="form-select" id="validationCustom04" required>
                            <option selected disabled value={-1}>사용자 타입을 선택해주세요</option>
                            <option value={0}>일반 사용자</option>
                            <option value={1}>지점주</option>
                        </select>                        
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary m-2' onClick={Btn_Register_Click}>회원가입</button>                    
                </div>
            </div>
        </div>
        
    )
}

export default Register;