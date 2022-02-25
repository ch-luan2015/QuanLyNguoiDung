import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { authActions } from '../authSlice';

export interface LoginPageProps { }

const initialUser = {
  username: "",
  email: ""
};
export default function LoginPage(props: LoginPageProps) {
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialUser)
  const { Title } = Typography;


  const handleInputChange = (e: any) => {

    const { username, email } = e.target;

    // setUser({
    //   ...user, [username]: email
    // })

    console.log("user", username)
    console.log("email", email)


  }

  const handleLoginClick = () => {

    dispatch(authActions.login({
      username: "luan",
      email: "chinh.luan2015@gmail.com"
    }))
  }
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Title style={{ textAlign: "center", width: "100%" }}>Login</Title>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              placeholder="email"

            />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button"
              style={{ marginRight: "10px" }}
              onClick={handleLoginClick}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Col>

    </Row>
  )
}
