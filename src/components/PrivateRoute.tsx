import { AdminUser } from 'models';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, RouteProps, Route } from 'react-router-dom';


const admin: AdminUser = {
  name: "luan",
  email: 'luan123@gmail.com',
  password: 'luan123',
  id: '0'
}
export default function PrivateRoute(props: RouteProps) {

  console.log("props", props)
  const userLogin = useSelector((state: any) => state.users.currentUser);
  console.log("userLogin", userLogin);
  // if (userLogin.name === admin.name) {
  //   isLoginIn = true;
  // }
  // console.log("isLoginIn", isLoginIn)
  //Check user login
  // const isLoggedIn = Boolean(localStorage.getItem('UserLogin'));


  // if (!isLoginIn) return <Redirect to="/" />;
  return <Route {...props} />;

}

