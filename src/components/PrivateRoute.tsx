import * as React from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';


function PrivateRoute(props: RouteProps) {
  //Check user login

  // const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  const isLoggedIn = true;

  if (!isLoggedIn) return <Redirect to="/login" />
  return <Route {...props} />

}

export default PrivateRoute
