import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import DetailsBook from "../pages/DetailsBook";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Books from "../pages/Books";
import MyBooks from "../pages/MyBooks";
import AddBook from "../pages/AddBook";
import MySingleBook from "../component/MySingleBook";
import WishList from "../component/WishList";
import Reading from "../component/Reading";
import PrivateRoute from "./PrivateRoute";
import EditBook from "../component/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/mybooks",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/mybooks",
            element: <MySingleBook />,
          },
          {
            path: "/mybooks/wishlist",
            element: <WishList />,
          },
          {
            path: "/mybooks/reading",
            element: <Reading />,
          },
        ],
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <DetailsBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/editbook/:id",
        element: <EditBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
