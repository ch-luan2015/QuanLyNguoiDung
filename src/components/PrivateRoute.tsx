import * as React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ROLE } from 'models/role';


const PrivateRoute = ({ children, roles }: { children: JSX.Element; roles: Array<ROLE> }) => {

  let location = useLocation();

  const getstate = useSelector(state => state)
  const { isAuthenticated, user, loading } = useSelector((state: any) => state.auth);



  console.log("getState", getstate)

  console.log("loading", loading);
  console.log("isAuthenticated", isAuthenticated);
  console.log("userLogin", user);

  //Neu loading thi tra ve checking account
  if (loading) {
    return <p>Checking authentication...</p>
  }

  const userHasRequiredRole = user && roles.includes(user.role) ? true : false
  //Neu khong phai Authen thi chuyen ve /login

  console.log("userHasRequiredRole", userHasRequiredRole);

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <p>AccessDenied</p>; // Quyen truy cap bi tu choi, studen want access teacher page
  }

  return children;

}

export default PrivateRoute;


