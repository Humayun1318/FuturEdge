import { Navigate} from "react-router-dom";


const PrivateRoute = ({ children }) => {
 
 

  // if (user) {
  //   return children;
  // }


  return (
    <Navigate to={"/auth/login"}></Navigate>
  );
};

export default PrivateRoute;