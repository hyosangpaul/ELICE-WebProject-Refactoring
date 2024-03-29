import Home from "../../Page/Main/Home";
import Cart from "../../Page/Cart/Cart";
import LoginForm from "../../Page/User/Login/LoginForm";
import RegisterForm from "../../Page/User/Register/RegisterForm";
import Favorite from "../../Page/Favorite/Favorite";
import UserMain from "../../Page/User/UserMain/UserMain";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Home,
  },
  LOGIN: {
    path: "/LoginForm",
    link: "/LoginForm",
    element: LoginForm,
  },
  REGISTER: {
    path: "/RegisterForm",
    link: "/RegisterForm",
    element: RegisterForm,
  },
  FAVORITE: {
    path: "/Favorite",
    link: "/Favorite",
    element: Favorite,
  },
  CART: {
    path: "/Cart",
    link: "/Cart",
    element: Cart,
  },
  USERMAIN: {
    path: "/UserMain",
    link: "/UserMain",
    element: UserMain,
  }
};

export const ROUTE_ARR = Object.values(ROUTE);