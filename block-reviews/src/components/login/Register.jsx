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
    const [user, setUser] = useState({name:'',email:'',password:''})
    const [validated, setValidated] = useState(false);
    const [resultMessage,setResultMessage] = useState({code:"200",message:"ok"})

    const [isValid, setIsValid] = useState(false);
    const [idValid, setIdCheck] = useState(false);
    const [errorMail,setErrorMail] = useState(errorMsg.empty);

    function handleName(e){
        console.log(e.target.value);
        var result = IdCheck(e.target.value);

        
        setIdCheck(result);
    }

    function handleEmail(e){
        console.log(e.target.value);
    }

    function handlePassword(e){

    }

    function handleSubmit(event){
        const form = event.currentTarget;       
    };

    return(
        <div className='Register-Layout'>
            <h3>계정 생성</h3>                       
           <Container className={"text-center"} fluid>
            <Form noValidate validated={validated} className="form-signup" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">계정 생성</h1>
                <Form.Group controlId={"formBasicName"}>
                    <Form.Label className="sr-only">아이디</Form.Label>
                    <Form.Control className={"form-signup-input"} 
                                  onChange={handleName} 
                                  type={"text"} 
                                  placeholder={"ID를 입력해주세요"}
                                  minLength={"5"}
                                  required  />
                    <Form.Control.Feedback type="invalid" className={"float-left"}>
                        ID를 입력해주세요 (5자 이상 입력)
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId={"formBasicEmail"}>
                    <Form.Label className="sr-only">이메일</Form.Label>
                    <Form.Control className={`form-signup-email ${isValid?'is-invalid':''}`} 
                                  onChange={handleEmail} 
                                  type={"email"} 
                                  placeholder={"이메일을 입력해주세요"}/>
                    <Form.Control.Feedback type="invalid" className={"float-left"}>
                        {errorMail}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId={"formBasicPassword"}>
                    <Form.Label className="sr-only">비밀번호</Form.Label>
                    <Form.Control className={"form-signup-input"} 
                                  onChange={handlePassword} 
                                  type={"password"} 
                                  placeholder={"Password"} 
                                  required />
                    <Form.Control.Feedback type="invalid" className={"float-left"}>
                        비밀번호를 입력해주세요!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId={"fromBasicConfirmPassword"}>
                    <Form.Label className="sr-only">비밀번호 확인</Form.Label>
                    <Form.Control className={"form-signup-input"} 
                                  onChange={handlePassword} 
                                  type={"password"} 
                                  placeholder={"Confirm Password"} 
                                  required />
                    <Form.Control.Feedback type="invalid" className={"float-left"}>
                        비밀번호를 확인해주세요!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId={"formBasicPassword"}>
                    <Form.Label className="sr-only">Password</Form.Label>
                    <Form.Control className={"form-signup-input"} 
                                  onChange={handlePassword} 
                                  type={"password"} 
                                  placeholder={"Password"} 
                                  required />
                    <Form.Control.Feedback type="invalid" className={"float-left"}>
                        비밀번호를 입력해주세요!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" variant={"primary"} type={"submit"}>
                    Sign up
                </Button>
                <p className={"float-left"}><a href={"/signin"}>Sign in</a></p>
                <p className="mt-5 mb-3 text-muted">&copy; BlockReviews</p>
            </Form>
        </Container>
        </div>
    )
}

export default Register;