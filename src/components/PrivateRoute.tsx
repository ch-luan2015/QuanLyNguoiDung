import * as React from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';

export default function PrivateRoute(props: RouteProps) {
  //Check user login
  // const isLoggedIn = Boolean(localStorage.getItem('UserLogin'));

  const isLoggedIn = true;

  if (!isLoggedIn) { return <Redirect to="/" /> };
  return <Route {...props} />;

}

