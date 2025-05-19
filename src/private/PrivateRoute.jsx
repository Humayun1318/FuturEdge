import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Context";
import GradientLoader from "../components/Loader/GradientLoader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <GradientLoader></GradientLoader>;
  }

  if (user && user?.email) {
    return children;
  }

  return (
    <Navigate to="/auth/login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
