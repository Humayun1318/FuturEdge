import { useContext, useState } from "react";
import {
  FaGoogle,
  FaGithub,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    signInUserWithEmailPassword,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    signInWithGithub,
  } = useContext(AuthContext);
  const isDisabled = !formData.email || !formData.password || loading;

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ ...errors, email: "Please give a valid Email!" });
      return;
    }

    setFormData({ ...formData, email: email, password: password });

    signInUserWithEmailPassword(email, password)
      .then((re) => {
        setUser(re.user);
        toast.success("Login successfully!", { position: "top-center" });
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message ? err.message : "Login failed, try again!", {
          position: "top-center",
        });
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((re) => {
        setUser(re.user);
        toast.success("Login successfully!", { position: "top-center" });
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message ? err.message : "Login failed, try again!", {
          position: "top-center",
        });
        setLoading(false);
      });
  };
  const handleGitHubProvider = () => {
    signInWithGithub()
      .then((re) => {
        setUser(re.user);
        toast.success("Login successfully!", { position: "top-center" });
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message ? err.message : "Login failed, try again!", {
          position: "top-center",
        });
        setLoading(false);
      });
  };
  const handleLoginGuesUser = () => {
    const email = "guestuser@gmail.com";
    const password = "pcejKpVu8sBUJx4";
    signInUserWithEmailPassword(email, password)
      .then((re) => {
        setUser(re.user);
        toast.success("Login successfully!", { position: "top-center" });
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message ? err.message : "Login failed, try again!", {
          position: "top-center",
        });
        setLoading(false);
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-lora-heading">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to continue
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            onClick={() => {
              handleGoogleLogin();
            }}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md 
                       text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
            type="button"
          >
            <FaGoogle className="h-5 w-5 mr-2" />
            Google
          </button>
          <button
            onClick={() => {
              handleGitHubProvider();
            }}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md 
                       text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
            type="button"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form
          className="mt-6 space-y-6"
          onSubmit={handleSubmitLogin}
          noValidate
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1 relative">
              <FaEnvelope className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                // id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData?.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                required
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <FaLock className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                // id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={formData?.password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
                required
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none `}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
              {/* {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )} */}
            </div>
          </div>

          <div className="">
            <div className="text-sm">
              <Link
                to={`/forgot-password${
                  formData?.email
                    ? `?email=${encodeURIComponent(formData?.email)}`
                    : ""
                }`}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                      text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      ${
                        isDisabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-900 cursor-pointer"
                      }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>

        {/* demo login */}
        <div>
          <p className="text-center text-sm text-gray-600 mb-4">
            If you'd prefer not to use your real credentials, simply click the
            button below to log in as a guest or demo user.
          </p>
          <button
            onClick={() => {
              handleLoginGuesUser();
            }}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                      text-white focus:outline-none focus:ring-2 bg-blue-600 hover:bg-blue-900 
                      cursor-pointer focus:ring-offset-2 focus:ring-blue-500"
          >
            Guest Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
