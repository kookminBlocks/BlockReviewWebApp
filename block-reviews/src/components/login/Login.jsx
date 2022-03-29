import '../../scss/Login.scss'
import { Link } from "react-router-dom";
import {useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(setToken) {            
    const navigate = useNavigate();

    var [Id,IdChanged] = useState(null);
    var [Pwd,PwdChanged] = useState(null);
    var [WalletFile, FileChanged] = useState(null);
    
    const Btn_Login_Click = () => {        
        if (!Id || !Pwd){
            alert('아이디와 패스워드를 입력해주세요');
        }
        else{
            axios.post('https://localhost:44387/api/User/Login', {                       
                id:Id,
                PassWord:Pwd,
            })
            .then(res => {     
                if (res.status == 200) {
                    localStorage.setItem('user', res.data)
                    setToken(res.data.id);
                    navigate("/store/list");
                }
                else{
                    alert('아이디 혹은 비밀번호가 확인되지 않습니다.')
                }
            })
            .catch(function() {
                
            });
        }
    }

    return (
        <div className='Register-Layout'>            
            <div className='content-layout'>
                <h2>로그인</h2>
                <div className='d-flex align-items-center mb-3 mt-3'>
                    <div style={{width:"150px", marginRight:"5px"}}>
                        ID
                    </div>
                    <div>
                        <input className='form-control' placeholder='아이디를 입력해주세요' onChange={(e) => {IdChanged(e.target.value)}} type={"text"}/>
                    </div>
                </div>       
                <div className='d-flex align-items-center  mb-3'>
                    <div style={{width:"150px", marginRight:"5px"}}>
                        PassWord
                    </div>
                    <div>
                        <input className='form-control' placeholder='비밀번호를 입력해주세요' onChange={(e) => {PwdChanged(e.target.value)}} type={"password"}/>
                    </div>
                </div>    
                <div className='d-flex align-items-center  mb-3'>
                    <div style={{width:"150px", marginRight:"5px"}}>
                        지갑 파일
                    </div>
                    <div>
                        <input className='form-control' value={WalletFile} onChange={(e) => {FileChanged(e.target.files[0])}} type={"file"}/>
                    </div>
                </div>    
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary m-2' onClick={Btn_Login_Click}>로그인</button>
                    <Link to="Register">
                        <button className='btn btn-secondary m-2'>회원가입</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;

