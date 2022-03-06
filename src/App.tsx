
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./features/auth/pages/LoginPage"
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Private Route */}
        {/* <Route path='/admin' element={
          <PrivateRoute >
            <AdminLayout />
          </PrivateRoute>} /> */}

        <Route path="/admin" element={<AdminLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  );
}

export default App;
