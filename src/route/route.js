import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
//ssssss
const routesAll = {
  GUEST: {
    routes: [{ path: '/', component: Home },
    { path: '/productDescription/:productId', component: ProductDescription }
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [{ path: '/', component: Home },
    { path: '/productDescription/:productId', component: ProductDescription }
    ],
    redirect: '/',
  },
  ADMIN: {
    routes: [{ path: '/', component: Home },
    { path: '/productDescription/:productId', component: ProductDescription }
    ],
    redirect: '/',
  },
};

export default routesAll;
