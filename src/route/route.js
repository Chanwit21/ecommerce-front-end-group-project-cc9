import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDescription from '../pages/ProductDescription';
import SignUp from '../pages/SignUp';
import Transaction from '../pages/Transaction'


const routesAll = {
  GUEST: {
    routes: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/sign_up', component: SignUp },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription/:productName', component: ProductDescription },
      { path: '/transaction', component: Transaction },
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [
      { path: '/', component: Home },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription/:productName', component: ProductDescription },
    ],
    redirect: '/',
  },
  ADMIN: {
    routes: [
      { path: '/', component: Home },
      { path: '/productDescription/:productName', component: ProductDescription },
    ],
    redirect: '/',
  },
};

export default routesAll;
