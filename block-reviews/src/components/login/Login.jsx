import {
    Form, Input, Input,
    InputNumber, Radio, Row, Col
} from 'antd';

import { NavLink } from 'react-router-dom';

function Login() {
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    return (
        <div className='Register-Layout'>
            <h3>계정 생성</h3>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >

                <Form.Item
                    name="id"
                    label="아이디"
                    rules={[
                        {
                            required: true,
                            message: '아이디를 입력해주세요',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="비밀번호"
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 입력해주세요',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Row>
                        <Col>
                            <Button type="primary" htmlType="submit">
                                로그인
                            </Button>
                        </Col>                                            
                        <Col> 
                            <Button onclick>
                                계정 생성
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
                </Form>
        </div>
    )
}

export default Login;

