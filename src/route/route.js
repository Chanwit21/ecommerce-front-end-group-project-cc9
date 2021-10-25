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

const routesAll = {
  GUEST: {
    routes: [
      { path: "/", component: Home },
      { path: "/login", component: Login },
      { path: "/sign_up", component: SignUp },
      { path: "/checkout", component: Checkout },
      { path: "/shoppingCart", component: ShoppingCart },
      { path: "/create_product", component: CreateProduct },
      { path: "/contact_us", component: ContactUs },
      { path: "/allProduct", component: AllProduct },
      { path: "/myProFile", component: MyProfile },
      { path: "/editMyProFile", component: EditMyProfile },
      { path: "/myAddress", component: MyAddress },
      { path: "/addNewAddress", component: AddNewAddress },
      { path: "/termCondition", component: TermCondition },
      { path: "/favorite", component: Favorite },
      { path: "/productDescription/:productName", component: ProductDescription },
      { path: "/transaction", component: Transaction },
      { path: "/product_summary", component: ProductSummary },
      { path: "/user_payment", component: UserPayment },
      { path: "/user_add_card", component: UserAddCard },
      { path: "/admin_inbox", component: AdminInbox },
      { path: "/admin_profile", component: AdminProfile },
    ],
    redirect: "/",
  },
  CUSTOMER: {
    routes: [
      { path: "/", component: Home },
      { path: "/checkout", component: Checkout },
      { path: "/productDescription/:productName", component: ProductDescription },
      { path: "/user_payment", component: UserPayment },
      { path: "/user_add_card", component: UserAddCard },
    ],
    redirect: "/",
  },
  ADMIN: {
    routes: [
      { path: '/', component: Home },
      { path: '/productDescription/:productName', component: ProductDescription },
      { path: '/product_summary', component: ProductSummary },
      { path: '/create_product', component: CreateProduct },
      { path: "/admin_inbox", component: AdminInbox },
      { path: "/admin_profile", component: AdminProfile },
    ],
    redirect: "/",
  },
};

export default routesAll;
