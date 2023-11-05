import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddFood from "../Pages/AddFood/AddFood";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPAge/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import SingleFood from "../Pages/SingleFood/SingleFood";
import ManageMyFoods from "../Pages/ManageMyFood/ManageMyFoods";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ManageOrder from "../Pages/MangeOrder/ManageOrder";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <SingleFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/food/${params.id}`),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoute>
            <ManageMyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/food/${params.id}`),
      },
      {
        path: '/manage/:id',
        element: <ManageOrder/>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/pendingFoods/${params.id}`),
      }
    ],
  },
]);
export default Router;
