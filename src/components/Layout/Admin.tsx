import React, { useEffect, useState } from 'react'
import { Table, Col, Row, Button, Form, Input, Space, Tooltip, Typography, Menu } from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from 'features/users/usersSlice';
import { v4 as uuidv4 } from 'uuid';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export function AdminLayout() {

  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.usersInitial)
  const [userList, setUserList] = useState(users)

  console.log("usersList", userList);
  console.log("users", users);

  useEffect(() => {
    setUserList(users)
  }, [users]);

  const columns = [
    {
      title: "Id",
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '',
      key: 'action',
      render: (record: any) => (
        <Space size="middle">
          <Button type="primary" >Sửa</Button>
          <Button type="primary" danger onClick={() => deleteUserTable(record)}>Xóa</Button>
        </Space >
      ),
    },
  ];
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    let newUser = {
      "id": (users.length + 1).toString(),
      "name": values.username,
      "email": values.email
    }
    dispatch(usersActions.addUser(newUser));
  };

  const deleteUserTable = (record: any) => {
    console.log("record", record.id)

    dispatch(usersActions.deleteUser(record.id));
  }

  return (
    <Layout>

      <Header>
        <Menu theme="dark" mode="horizontal" >
          <Menu.Item key={1}>
            <Link to="/">
              Trang Chủ
            </Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content>
        <Row style={{ maxWidth: "1080px", margin: "auto", marginTop: "36px" }}>
          <Col span={12} style={{ margin: "auto" }}>
            <Typography.Title style={{ textAlign: "center" }}>Thêm Người Dùng</Typography.Title>
            <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Form.Item label="Username">
                <Space>
                  <Form.Item
                    name="username"
                    noStyle
                    rules={[{ required: true, message: 'Username is required' }]}
                  >
                    <Input style={{ width: '100%' }} placeholder="Username" />
                  </Form.Item>
                  <Tooltip title="Useful information">
                    <Typography.Link href="#API">Help?</Typography.Link>
                  </Tooltip>
                </Space>
              </Form.Item>
              <Form.Item label="Email">
                <Form.Item
                  name="email"
                  noStyle
                  rules={[{ required: true, message: 'Email is required' }]}
                >
                  <Input style={{ width: '50%' }} placeholder="Email" />
                </Form.Item>
              </Form.Item>

              <Form.Item label=" " colon={false} >
                <Button style={{ backgroundColor: "green", color: "white" }} size="large" htmlType="submit">
                  Thêm
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col span={12}>
            {
              (userList.length) > 0 ?
                <>
                  <Title>Danh sách người dùng</Title>
                  <Table columns={columns} dataSource={userList} />
                </>
                : <p>Loading</p >}
          </Col>
        </Row>
      </Content>


      <Footer>
        © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
        Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Xem chính sách sử dụng
      </Footer>
    </Layout>
  )
}
