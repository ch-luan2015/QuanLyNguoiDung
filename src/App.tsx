
import { Counter } from './features/counter/Counter';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from "./features/auth/pages/LoginPage"
import { AdminLayout } from 'components/Layout';
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';



function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
      {/* <Counter /> */}
    </>
  );
}

export default App;
