import * as React from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';


function PrivateRoute(props: RouteProps) {
  //Check user login
  const isLoggedIn = Boolean(localStorage.getItem('UserLogin'));
  console.log("isLoggedIn", isLoggedIn)
  if (!isLoggedIn) return <Redirect to="/login" />
  return <Route {...props} />
}

export default PrivateRoute
