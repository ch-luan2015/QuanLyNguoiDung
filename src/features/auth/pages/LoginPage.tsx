import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, CurrentUser } from '../authSlice';
import { Redirect, useHistory } from "react-router-dom";



export default function LoginPage() {
  const history = useHistory();


  const dispatch = useDispatch();
  const { Title } = Typography;
  const iLoginInRedux = useSelector((state: any) => state.auth.isLoggedIn)
  const [userLogin, setUserLogin] = useState<CurrentUser | undefined>()
  const [isLoginIn, setIsLoginIn] = useState(iLoginInRedux)



  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (userLogin !== undefined) {
      dispatch(authActions.loginSucces(userLogin))
    }
  }, [userLogin, iLoginInRedux]);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);

    setUserLogin(values);

    return (
      history.push("/admin")
    );

  }


  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Title style={{ textAlign: "center", width: "100%" }}>Login</Title>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>



          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>

    </Row>
  )
}
