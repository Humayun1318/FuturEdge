import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../context/Context";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  
  if(loading){
    return <p>Loading......</p>
  }

  if (user && user?.email) {
    return children;
  }


  return (
    <Navigate to={"/auth/login"}></Navigate>
  );
};

export default PrivateRoute;