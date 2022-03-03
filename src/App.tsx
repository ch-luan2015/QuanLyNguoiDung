
import { Counter } from './features/counter/Counter';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from "./features/auth/pages/LoginPage"
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';



function App() {

  return (
    <Switch>

      <PrivateRoute path="/admin" >
        <AdminLayout />
      </PrivateRoute>

      <Route path="/">
        <LoginPage />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>

  );
}

export default App;
