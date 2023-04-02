import Home from "../../Page/Main/Home";
import Cart from "../../Page/Cart/Cart";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Home,
  },
  CART: {
    path: "/Cart",
    link: "/Cart",
    element: Cart,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);