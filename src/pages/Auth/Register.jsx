import { useContext, useState } from "react";
import {
  FaGoogle,
  FaGithub,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaImage,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { toast } from "react-toastify";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { createUserWithEmailPassword, setUser } = useContext(AuthContext);
  const isDisabled =
    !registerFormData.name ||
    !registerFormData.email ||
    !registerFormData.password ||
    loading;

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (name.length < 5) {
      setErrors({ ...errors, name: "Name must be at least 5 characters!" });
      setLoading(false);
      return;
    } else if (name.length > 5) {
      setErrors({ ...errors, name: "" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ ...errors, email: "Please give a valid Email!" });
      setLoading(false);
      return;
    }

    if (password?.length < 6) {
      setLoading(false);
      return setErrors({ ...errors, password: "password must be at least 6!" });
    }

    createUserWithEmailPassword(email, password)
      .then((re) => {
        setUser(re.user);
        toast.success("User created successfully!!",{ position: "top-center" });
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error ? error.message : "Failed to register the user!", {
          position: "top-center",
        });
        setLoading(false);
      });

    setRegisterFormData({ name, email, photoURL, password });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create New Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join Our Platform & Stay With Us
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md 
                       text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            type="button"
          >
            <FaGoogle className="h-5 w-5 mr-2" />
            Google
          </button>
          <button
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md 
                       text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
              Or register with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-6" onSubmit={handleSubmitRegister}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="mt-1 relative">
              <FaUser className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                // autoComplete="name"
                value={registerFormData?.name}
                onChange={(e) => {
                  setRegisterFormData({
                    ...registerFormData,
                    name: e.target.value,
                  });
                  if (e.target.value.length >= 5 && errors.name) {
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }
                }}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                          `}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 absolute mb-1">
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-1 relative">
              <FaEnvelope className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={registerFormData?.email}
                onChange={(e) => {
                  setRegisterFormData({
                    ...registerFormData,
                    email: e.target.value,
                  });
                  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }
                }}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                         `}
              />
            </div>
            {errors.email && (
              <p className=" text-sm text-red-600 ">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo URL (Optional)
            </label>
            <div className="mt-1 relative">
              <FaImage className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                autoComplete="photo"
                value={registerFormData?.photoURL}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    photoURL: e.target.value,
                  })
                }
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                          `}
                placeholder="https://example.com/photo.jpg"
              />
              {/* {errors.photoURL && (
                <p className="mt-1 text-sm text-red-600">{errors.photoURL}</p>
              )} */}
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
                id="password"
                name="password"
                type={registerFormData?.showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={registerFormData?.password}
                onChange={(e) => {
                  setRegisterFormData({
                    ...registerFormData,
                    password: e.target.value,
                  });
                  if (e.target.value.length >= 6) {
                    setErrors((prev) => ({ ...prev, password: "" }));
                  }
                }}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                          `}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                onClick={() => {
                  setRegisterFormData({
                    ...registerFormData,
                    showPassword: !registerFormData?.showPassword,
                  });
                }}
              >
                {registerFormData.showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className=" text-sm text-red-600 absolute">
                {errors.password}
              </p>
            )}
          </div>

          {/* {errors.general && (
            <div className="rounded-md bg-red-50 p-4" role="alert">
              <p className="text-sm text-red-700">{errors.general}</p>
            </div>
          )} */}

          <button
            type="submit"
            disabled={isDisabled}
            className={` w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                      text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     ${
                       isDisabled
                         ? "bg-gray-400 cursor-not-allowed"
                         : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                     }`}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
