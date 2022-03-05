import * as React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ROLE } from 'models/role';


const PrivateRoute = ({ children }: { children: JSX.Element }) => {

  let location = useLocation();

  const { isLoggedIn, currentUser, logging } = useSelector((state: any) => state.auth);



  //Neu loading thi tra ve checking account
  if (logging) {
    return <p>Checking authentication...</p>
  }

  // const userHasRequiredRole = user && roles.includes(user.role) ? true : false
  //Neu khong phai Authen thi chuyen ve /login


  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />
  }

  // if (isAuthenticated && !userHasRequiredRole) {
  //   return <p>AccessDenied</p>; // Quyen truy cap bi tu choi, studen want access teacher page
  // }

  return children;

}

export default PrivateRoute;


