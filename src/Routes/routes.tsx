import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import BookDetails from "../Components/book-component/BookDetails";
import Cart from "../Components/cart-component/Cart";
import Wishlist from "../Components/wishlist-component/Wishlist";
import PrivateRoutes from "./privateRoutes";
import AddBook from "../Components/book-component/AddBook";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Books from "../Components/book-component/Books";
import Coupon from "../Pages/Coupon";
import NotFound from "../Pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/coupon",
        element: <Coupon />,
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoutes>
            <AddBook />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes;
