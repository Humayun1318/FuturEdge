import { useState } from "react";
import { AuthContext } from "../Context";


const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "umu",
    email: "heffefk@gmail.com"
})

  const authInfo = {
    user,
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;