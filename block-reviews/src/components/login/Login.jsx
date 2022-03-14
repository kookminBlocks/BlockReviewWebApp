import '../../scss/Login.scss'
import { Form, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

const errorMsg = {
    'empty' : '메일 주소를 입력해주세요',
    'exist_email': '이미 등록된 메일입니다. 다른 메일을 입력해주세요',
}

function Login() {    

   
    return (
        <div className='Register-Layout'>            
            <h3>계정 생성</h3>
            <Form             
            >
           
           <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    ID
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Group>
            </Form>                  
        </div>
    )
}

export default Login;

