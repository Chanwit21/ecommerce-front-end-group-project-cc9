import Checkout from '../pages/Checkout';
import ContactUs from '../pages/ContactUs';
import CreateProduct from '../pages/CreateProduct';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDescription from '../pages/ProductDescription';
import ShoppingCart from '../pages/ShoppingCart';
import SignUp from '../pages/SignUp';

const routesAll = {
  GUEST: {
    routes: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/sign_up', component: SignUp },
      { path: '/checkout', component: Checkout },
      { path: '/shoppingCart', component: ShoppingCart },
      { path: '/create_product', component: CreateProduct },
      { path: '/contact_us', component: ContactUs },
      { path: '/productDescription/:productId', component: ProductDescription },
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [
      { path: '/', component: Home },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription/:productId', component: ProductDescription },
    ],
    redirect: '/',
  },
  ADMIN: {
    routes: [
      { path: '/', component: Home },
      { path: '/productDescription/:productId', component: ProductDescription },
    ],
    redirect: '/',
  },
};

export default routesAll;
