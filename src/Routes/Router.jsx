import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddFood from "../Pages/AddFood/AddFood";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path:'/register',
        element: <Register/>,
      },
    ],
  },
]);
export default Router;
