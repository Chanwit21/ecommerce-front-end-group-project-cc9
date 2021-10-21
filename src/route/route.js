import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
import ShoppingCart from "../pages/ShoppingCart";

const routesAll = {
  GUEST: {
    routes: [
      { path: "/", component: Home },
      { path: "/productDescription", component: ProductDescription },
      { path: "/shoppingCart", component: ShoppingCart },
      { path: "/favorite", component: Favorite },
    ],
    redirect: "/",
  },
  CUSTOMER: {
    routes: [
      { path: "/", component: Home },
      { path: "/productDescription", component: ProductDescription },
    ],
    redirect: "/",
  },
  ADMIN: {
    routes: [
      { path: "/", component: Home },
      { path: "/productDescription", component: ProductDescription },
    ],
    redirect: "/",
  },
};

export default routesAll;
