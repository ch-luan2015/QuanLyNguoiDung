import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Row, Col, Typography, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, selectIsLogging } from '../authSlice';



export default function LoginPage() {

  const dispatch = useDispatch();
  const { Title } = Typography;

  const isLogging = useSelector(selectIsLogging);
  console.log("isLogging", isLogging)

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  const onFinish = (values: any) => {
    dispatch(authActions.login(values))
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
              {isLogging && <Spin />}  Login
            </Button>
          </Form.Item>
        </Form>
      </Col>

    </Row>
  )
}
