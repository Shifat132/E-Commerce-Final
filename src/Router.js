import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Rootlayout from "./Rootlayout";
import CataGories from "./Components/CataGories";
import LoginExclusive from "./Components/LoginExclusive";
import SingUp from "./Components/SingUp";
import SellinghProducts from "./Components/SellinghProducts";
import Shop from "./pages/Shop";
import Contact from "./Components/Contact";
import Productdettels from "./pages/Productdettels";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";






export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "nabigate", Component: CataGories },
      { path: "navitgateignup", Component: LoginExclusive },
      { path: "signuppart", Component: SingUp },
      { path: "navitgateabout", Component: SellinghProducts },
      { path: "navitgatehome", Component: Home },
      { path: "navigatecontect", Component: LoginExclusive },
      { path: "navitgateshopNow", Component: Shop },
      { path: "shop", Component: Shop },
      { path: "contact", Component: Contact },
      { path: "productdettels/:id", Component: Productdettels },
      { path: "cartdettels", Component: Cart},
      { path: "wishlistdettels", Component: WishList},



    ],
  },
]);