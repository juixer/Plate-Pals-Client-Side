import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import { BallTriangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // location
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-64">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
