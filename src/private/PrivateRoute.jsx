import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../context/Context";


const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const { user, loading } = useContext(AuthContext)
  
  if(loading){
    return <p>Loading......</p>
  }

  if (user && user?.email) {
    return children;
  }


  return (
    <Navigate to={"/auth/login"} state={location.pathname}></Navigate>
  );
};

export default PrivateRoute;