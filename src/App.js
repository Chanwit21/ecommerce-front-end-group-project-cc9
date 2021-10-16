import routesAll from './route/route';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import AppContainer from './layout/AppContainer';
import { CartContextProvider } from './context/CartContext';

function App() {
  const {
    state: { user },
  } = useAuthContext();
  const role = user ? user.role : 'GUEST';

  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppContainer>
          <Switch>
            {routesAll[role].routes.map((route, index) => {
              return <Route key={index} to={route.path} component={route.component} />;
            })}
            <Redirect to={routesAll[role].redirect} />
          </Switch>
        </AppContainer>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
