import { FaGoogle, FaGithub, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaUser, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {


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
            <span className="px-2 bg-white text-gray-500">Or register with email</span>
          </div>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-6">

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 relative">
              <FaUser className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                // autoComplete="name"
                // value={formData.name}
                // onChange={}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                          `}
              />
              {/* {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )} */}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 relative">
              <FaEnvelope className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                // value={}
                // onChange={}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                         `}
              />
              {/* {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )} */}
            </div>
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Profile Photo URL (Optional)
            </label>
            <div className="mt-1 relative">
              <FaImage className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                autoComplete="photo"
                // value={}
                // onChange={}
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <FaLock className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                name="password"
                // type={}
                autoComplete="new-password"
                // value={}
                // onChange={}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none 
                          `}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                // onClick={}
              >
                {/* {formData.showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />} */}
              </button>
              {/* {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )} */}
            </div>
          </div>

          {/* {errors.general && (
            <div className="rounded-md bg-red-50 p-4" role="alert">
              <p className="text-sm text-red-700">{errors.general}</p>
            </div>
          )} */}

          <button
            type="submit"
            // disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                      text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     `}
          >
            {/* {loading ? 'Registering...' : 'Create Account'} */}Create Account
          </button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;