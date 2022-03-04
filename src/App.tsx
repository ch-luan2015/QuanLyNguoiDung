
import { Counter } from './features/counter/Counter';
import { Route, Switch, Router } from 'react-router-dom';
import './App.css';
import LoginPage from "./features/auth/pages/LoginPage"
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()



function App() {

  return (
    <Router history={history}>
      <Switch>

        <Route exact path="/" component={LoginPage} />


        {/* <PrivateRoute path='/admin'  >
          <AdminLayout />
        </PrivateRoute> */}

        <Route exact path='/admin' component={AdminLayout} />

        <Route path="/404" component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
