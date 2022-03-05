
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./features/auth/pages/LoginPage"
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';
import { ROLE } from 'models/role';
import { useEffect } from 'react';
import { store } from 'app/store';




function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      {/* Private Route */}
      <Route path='/admin' element={
        <PrivateRoute roles={[ROLE.Admin]}>
          <AdminLayout />
        </PrivateRoute>} />
      <Route path="*" element={NotFound} />
    </Routes>
  );
}

export default App;
