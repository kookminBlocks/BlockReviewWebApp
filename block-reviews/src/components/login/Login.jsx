import '../../scss/Login.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Navigate, useNavigate, usehistory } from "react-router-dom";
import { LoginAPICall }  from  '../../api/user'
import { Register_Url } from '../Commons/PathUrl'
import Spinner from "../Utils/Spinner";

function Login() {            
    const navigate = useNavigate();

    var [Id,IdChanged] = useState(null);
    var [Pwd,PwdChanged] = useState(null);
    var [WalletFile, FileChanged] = useState(null);
    const [SpinnerFlag, setSpinnerFlag] = useState(false);
    
    const Btn_Login_Click = async (e) => {            
        e.preventDefault();
        setSpinnerFlag(true);
        if (!Id || !Pwd){
            alert('아이디와 패스워드를 입력해주세요');
        }        
        else if(!WalletFile)
        {
            alert('지갑 파일을 업로드해주세요');
        }
        else {
            const userinfo = {
                Id: Id,
                Pwd: Pwd,
                PrivateKey: null,
                PublicKey: null
            };
                        
            const fileReader = new FileReader();
            fileReader.onload = async function (event) {
                const csvOutput = event.target.result;
                // 월렛 파일
                var file1 = csvOutput.split('\n');
                var keys = file1[1].split(',')                                
                
                userinfo.PublicKey = keys[0].replace('\r','');
                userinfo.PrivateKey = keys[1].replace('\r','');
                // console.log(userinfo.PrivateKey)
                // console.log(userinfo.PublicKey)

                const res = await LoginAPICall(userinfo);
                
                if (!res){
                    alert('api 오류입니다.');
                }
                else{
                    if (res.status == 200) {
                        localStorage.setItem('user', JSON.stringify(res.data))                    
                        navigate('/store/list');
                        // this.props.IsLogin()
                    }
                    else {
                        alert('아이디 혹은 비밀번호가 확인되지 않습니다.')
                    }   
                }
            };
            fileReader.readAsText(WalletFile);                         
        }

        setSpinnerFlag(false);
    }

    return (
        <div className='Register-Layout'>
            {SpinnerFlag ?
                <div style={{ width: "100%", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Spinner /> 
                </div>
            :
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
                            <input className='form-control' accept={".csv"} onChange={(e) => {FileChanged(e.target.files[0])}} type={"file"}/>
                        </div>
                    </div>    
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary m-2' onClick={Btn_Login_Click}>로그인</button>
                        <Link to={Register_Url}>
                            <button className='btn btn-secondary m-2'>회원가입</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login;

