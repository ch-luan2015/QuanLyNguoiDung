
import { Counter } from './features/counter/Counter';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import LoginPage from "./pages/LoginPage"
import UserList from './pages/UserList';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
      <Counter />

    </BrowserRouter>

  );
}

export default App;
