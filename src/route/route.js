import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ProductDescription from '../pages/ProductDescription';

const routesAll = {
  GUEST: {
    routes: [
      { path: '/', component: Home },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription', component: ProductDescription },
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [
      { path: '/', component: Home },
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
