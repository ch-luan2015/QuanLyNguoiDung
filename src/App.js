import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import LoginPage from "./pages/LoginPage"
import UserList from './pages/UserList';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
