import '../scss/Login.scss'
import {useState} from 'react';
import { Form, Input, Input,
    InputNumber, Radio,  Row, Col } from 'antd';

function Register(){    
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
    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return(
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

                <Form.Item
                    name="confirm"
                    label="비밀번호 확인"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '위에 비밀번호를 다시 입력해주세요',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('비밀번호가 일치하지 ㅇ낳습니다.'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="이메일"
                    rules={[
                        {
                            type: 'email',
                            message: '이메일 형식을 입력해주세요',
                        },                  
                    ]}
                >  <Input />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="닉네임"                    
                    rules={[{ required: true, message: '닉네임을 입력해주세요', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="성별"          
                >
                    <Select placeholder="성별을 선택해주세요">
                        <Option value="male">남성</Option>
                        <Option value="female">여성</Option>
                        <Option value="other">그 외</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="usertype"
                    label="계정 유형"
                    rules={[{ required: false, message: '계정 유형을 선택해주세요' }]}
                >
                    <Select placeholder="계정 유형을 선택해주세요">
                        <Option value="male">일반 사용자</Option>
                        <Option value="female">지점주</Option>                        
                    </Select>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                    만들기
                    </Button>
                </Form.Item>
            </Form>          
        </div>
    )
}