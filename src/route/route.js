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
import TermCondition from "../pages/TermCondition";
import AddNewAddress from "../pages/AddNewAddress";
import Transaction from "../pages/Transaction";
import UserPayment from "../pages/UserPayment";
import UserAddCard from "../pages/UserAddCard";
import AllProduct from "../pages/AllProduct";
import EditMyProfile from "../pages/EditMyProfile";
import ProductSummary from "../pages/ProductSummary";
import AdminInbox from "../pages/AdminInbox";
import AdminProfile from "../pages/AdminProfile";
import UserOrderSummary from "../pages/UserOrderSummary";
import MyProfileOrder from "../pages/MyProfileOrder";
import AdminOrder from "../pages/AdminOrder";
import EditAdminProfile from "../pages/EditAdminProfile";
=======
import Checkout from '../pages/Checkout';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyProfile from '../pages/MyProfile';
import ProductDescription from '../pages/ProductDescription';
import ShoppingCart from '../pages/ShoppingCart';
import SignUp from '../pages/SignUp';
import CreateProduct from '../pages/CreateProduct';
import ContactUs from '../pages/ContactUs';
import MyAddress from '../pages/MyAddress';
import TermCondition from '../pages/TermCondition';
import AddNewAddress from '../pages/AddNewAddress';
import Transaction from '../pages/Transaction';
import UserPayment from '../pages/UserPayment';
import UserAddCard from '../pages/UserAddCard';
import AllProduct from '../pages/AllProduct';
import EditMyProfile from '../pages/EditMyProfile';
import ProductSummary from '../pages/ProductSummary';
import AdminInbox from '../pages/AdminInbox';
import AdminProfile from '../pages/AdminProfile';
import UserOrderSummary from '../pages/UserOrderSummary';
import MyProfileOrder from '../pages/MyProfileOrder';
import AdminOrder from '../pages/AdminOrder';
import EditAdminProfile from '../pages/EditAdminProfile';
import AdminOrderSummary from '../pages/AdminOrderSummary';
>>>>>>> 874e4e0cbcd57466c66300b5fced2a1c91c7bae6

const routesAll = {
  GUEST: {
    routes: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/sign_up', component: SignUp },
      { path: '/contact_us', component: ContactUs },
      { path: '/allProduct/:category', component: AllProduct },
      { path: '/termCondition', component: TermCondition },
      {
        path: '/productDescription/:productName',
        component: ProductDescription,
      },
<<<<<<< HEAD
      { path: "/transaction", component: Transaction },
      { path: "/product_summary", component: ProductSummary },
      { path: "/user_payment", component: UserPayment },
      { path: "/user_add_card", component: UserAddCard },
      { path: "/admin_inbox", component: AdminInbox },
      { path: "/admin_profile", component: AdminProfile },
      { path: "/admin_order", component: AdminOrder },
=======
>>>>>>> 874e4e0cbcd57466c66300b5fced2a1c91c7bae6
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [
<<<<<<< HEAD
      { path: "/", component: Home },
      { path: "/checkout", component: Checkout },
      {
        path: "/productDescription/:productName",
        component: ProductDescription,
      },
      { path: "/user_payment", component: UserPayment },
      { path: "/product_summary", component: ProductSummary },
      { path: "/user_add_card", component: UserAddCard },
      { path: "/myAddress", component: MyAddress },
      { path: "/addNewAddress", component: AddNewAddress },
      { path: "/allProduct/:category", component: AllProduct },
      { path: "/favorite", component: Favorite },
      { path: "/shoppingCart", component: ShoppingCart },
      { path: "/userOrderSummary/:orderId", component: UserOrderSummary },
=======
      { path: '/', component: Home },
      { path: '/allProduct/:category', component: AllProduct },
      { path: '/productDescription/:productName', component: ProductDescription, },
      { path: '/checkout', component: Checkout },
      { path: '/user_payment', component: UserPayment },
      { path: '/user_add_card', component: UserAddCard },
      { path: '/myAddress', component: MyAddress },
      { path: '/addNewAddress', component: AddNewAddress },
      { path: '/favorite', component: Favorite },
      { path: '/shoppingCart', component: ShoppingCart },
      { path: '/userOrderSummary/:orderId', component: UserOrderSummary },
>>>>>>> 874e4e0cbcd57466c66300b5fced2a1c91c7bae6
      { path: "/contact_us", component: ContactUs },
      { path: "/editMyProFile", component: EditMyProfile },
      { path: '/myProFile', component: MyProfile },
      { path: '/myProfileOrder', component: MyProfileOrder },
    ],
    redirect: '/',
  },
  ADMIN: {
    routes: [
<<<<<<< HEAD
      { path: "/", component: Home },
      {
        path: "/productDescription/:productName",
        component: ProductDescription,
      },
      { path: "/product_summary", component: ProductSummary },
      { path: "/create_product", component: CreateProduct },
      { path: "/admin_inbox", component: AdminInbox },
      { path: "/admin_profile", component: AdminProfile },
      { path: "/myAddress", component: MyAddress },
      { path: "/addNewAddress/:orderId", component: AddNewAddress },
      { path: "/adminOrderSummary/:orderId", component: UserOrderSummary },
      { path: "/admin_profile_edit", component: EditAdminProfile },
      { path: "/contact_us", component: ContactUs },
      { path: "/allProduct/:category", component: AllProduct },
=======
      { path: '/', component: Home },
      { path: '/allProduct/:category', component: AllProduct },
      { path: '/productDescription/:productName', component: ProductDescription },
      { path: '/admin_profile', component: AdminProfile },
      { path: '/admin_profile_edit', component: EditAdminProfile },
      { path: '/transaction', component: Transaction },
      { path: '/product_summary', component: ProductSummary },
      { path: '/adminOrderSummary/:orderId', component: AdminOrderSummary },
      { path: '/create_product', component: CreateProduct },
      { path: "/admin_order", component: AdminOrder },
      { path: '/admin_inbox', component: AdminInbox },
>>>>>>> 874e4e0cbcd57466c66300b5fced2a1c91c7bae6
    ],
    redirect: '/',
  },
};

export default routesAll;
