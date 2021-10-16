import routesAll from './route/route';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import NavHeader from './component/NavHeader';
import Footer from './component/Footer';

function App() {
  const {
    state: { user },
  } = useAuthContext();
  const role = user ? user.role : 'GUEST';
  return (
    <BrowserRouter>
      <div className='d-flex flex-column'>
        <NavHeader />
        <div className='flex-grow-1' style={{ minHeight: '100vh' }}>
          <Switch>
            {routesAll[role].routes.map((route, index) => {
              return <Route key={index} to={route.path} component={route.component} />;
            })}
            <Redirect to={routesAll[role].redirect} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
