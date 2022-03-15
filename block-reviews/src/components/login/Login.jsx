import '../../scss/Login.scss'
import { Form, Container, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


function Login() {    

   
    return (
        <div className='Register-Layout'>            
            <h3>계정 생성</h3>
            <Container>
                <Form>
                    <Form.Group controlId={"formBasicName"}>
                        <Form.Label className="sr-only float-left">아이디</Form.Label>
                        <Form.Control className={"form-signup-input"}                                   
                                    type={"text"} 
                                    placeholder={"아이디를 입력해주세요"}
                                    minLength={"5"}
                                    required  />
                        <Form.Control.Feedback type="invalid" className={"float-left"}>
                            ID를 입력해주세요 (5자 이상 입력)
                        </Form.Control.Feedback>                    
                    </Form.Group>
                    <Form.Group controlId={"formBasicName"} >
                        <Form.Label className={"sr-only float-left"}>비밀번호</Form.Label>
                        <Form.Control className={"form-signup-input"}                                   
                                    type={"password"} 
                                    placeholder={"비밀번호를 입력해주세요"}                                    
                                    required  />
                        <Form.Control.Feedback type="invalid" className={"float-left"}>
                            비밀번호를 입력해주세요
                        </Form.Control.Feedback>                    
                    </Form.Group>
                    <div className='d-flex jusity justify-content-center'>
                        <Link to="Home">
                            <Button className="btn btn-lg m-2 btn-primary btn-block" variant={"primary"} type={"submit"}>
                                로그인
                            </Button>
                        </Link>         
                        <Link to="Register">
                            <Button className="btn btn-lg m-2 btn-block" variant={"primary"} type={"submit"}>
                                계정 생성
                            </Button>
                        </Link>               
                    </div>
                </Form>
            </Container>            
        </div>
    )
}

export default Login;

