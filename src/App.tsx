
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./features/auth/pages/LoginPage"
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';
import { ROLE } from 'models/role';
import { useAppDispatch } from 'app/hooks';
import { Button } from 'antd';
import { authActions } from 'features/auth/authSlice';





function App() {
  //Thu logout bang 1 cai nut
  const dispatch = useAppDispatch();

  return (
    <>
      <Button type="primary" danger onClick={() => dispatch(authActions.logout())}>Logout</Button>

      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Private Route */}
        {/* <Route path='/admin' element={
          <PrivateRoute >
            <AdminLayout />
          </PrivateRoute>} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<AdminLayout />} />
      </Routes>

    </>

  );
}

export default App;
