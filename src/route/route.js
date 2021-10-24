<<<<<<< HEAD
import Checkout from "../pages/Checkout";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import ProductDescription from "../pages/ProductDescription";
import ShoppingCart from "../pages/ShoppingCart";
import SignUp from "../pages/SignUp";
import CreateProduct from "../pages/CreateProduct";
import ContactUs from "../pages/ContactUs";
import MyAddress from "../pages/MyAddress";
import AddNewAddress from "../pages/AddNewAddress";
=======
import Checkout from '../pages/Checkout';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyProfile from '../pages/MyProfile';
import ProductDescription from '../pages/ProductDescription';
import ShoppingCart from '../pages/ShoppingCart';
import SignUp from '../pages/SignUp';
import Transaction from '../pages/Transaction'
import CreateProduct from '../pages/CreateProduct';
import ContactUs from '../pages/ContactUs';
import ProductSummary from '../pages/ProDuctSummary';
import UserPayment from '../pages/UserPayment';
import UserAddCard from '../pages/UserAddCard';
>>>>>>> de05323f77517887ea64ec1661d2b24d49509f59

const routesAll = {
  GUEST: {
    routes: [
<<<<<<< HEAD
      { path: "/", component: Home },
      { path: "/login", component: Login },
      { path: "/sign_up", component: SignUp },
      { path: "/checkout", component: Checkout },
      { path: "/shoppingCart", component: ShoppingCart },
      { path: "/create_product", component: CreateProduct },
      { path: "/contact_us", component: ContactUs },
      { path: "/productDescription/:productId", component: ProductDescription },
      { path: "/myProFile", component: MyProfile },
      { path: "/myAddress", component: MyAddress },
      { path: "/addNewAddress", component: AddNewAddress },
      { path: "/favorite", component: Favorite },
=======
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/sign_up', component: SignUp },
      { path: '/checkout', component: Checkout },
      { path: '/productDescription/:productName', component: ProductDescription },
      { path: '/transaction', component: Transaction },
      { path: '/shoppingCart', component: ShoppingCart },
      { path: '/create_product', component: CreateProduct },
      { path: '/contact_us', component: ContactUs },
      { path: '/product_summary', component: ProductSummary },
      { path: '/user_payment', component: UserPayment },
      { path: '/user_add_card', component: UserAddCard },
      { path: '/myProFile', component: MyProfile },
      { path: '/favorite', component: Favorite },
>>>>>>> de05323f77517887ea64ec1661d2b24d49509f59
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
