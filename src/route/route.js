<<<<<<< HEAD
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDescription from '../pages/ProductDescription';
import SignUp from '../pages/SignUp';
=======
import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
//ssssss\\


>>>>>>> productDescription

const routesAll = {
  GUEST: {
    routes: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/sign_up', component: SignUp },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription', component: ProductDescription },
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [
      { path: '/', component: Home },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription', component: ProductDescription },
    ],
    redirect: '/',
  },
  ADMIN: {
    routes: [
      { path: '/', component: Home },
      { path: '/productDescription', component: ProductDescription },
    ],
    redirect: '/',
  },
};

export default routesAll;
