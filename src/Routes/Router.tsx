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
        element: <MyBooks />,
        children: [
          {
            path: "/mybooks",
            element: <MySingleBook />,
          },
          {
            path: "/mybooks/wishlist",
            element: <MySingleBook />,
          },
          {
            path: "/mybooks/reading",
            element: <MySingleBook />,
          },
        ],
      },
      {
        path: "/books/1",
        element: <DetailsBook />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
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
