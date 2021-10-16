import routesAll from './route/route';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import NavHeader from './component/NavHeader';

function App() {
  const {
    state: { user },
  } = useAuthContext();
  const role = user ? user.role : 'GUEST';
  return (
    <BrowserRouter>
      <NavHeader />
      <Switch>
        {routesAll[role].routes.map((route, index) => {
          return <Route key={index} to={route.path} component={route.component} />;
        })}
        <Redirect to={routesAll[role].redirect} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
