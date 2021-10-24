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
      { path: "/productDescription/:productId", component: ProductDescription },
      { path: "/myProFile", component: MyProfile },
      { path: "/myAddress", component: MyAddress },
      { path: "/addNewAddress", component: AddNewAddress },
      { path: "/favorite", component: Favorite },
    ],
    redirect: "/",
  },
  CUSTOMER: {
    routes: [
      { path: "/", component: Home },
      { path: "/checkout", component: Checkout },
      { path: "/productDescription/:productId", component: ProductDescription },
    ],
    redirect: "/",
  },
  ADMIN: {
    routes: [
      { path: "/", component: Home },
      { path: "/productDescription/:productId", component: ProductDescription },
    ],
    redirect: "/",
  },
};

export default routesAll;
