import { Link } from "react-router-dom"; // or use next/link for Next.js

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          {/* Animated 404 SVG */}
          <div className="mb-6">
            <svg
              className="w-48 h-48 mx-auto"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="8"
                strokeDasharray="0 1000"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0 1000; 1000 0"
                  dur="2s"
                  repeatCount="1"
                  fill="freeze"
                />
              </circle>
              <text
                x="100"
                y="110"
                fontFamily="Arial"
                fontSize="60"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4F46E5"
              >
                404
              </text>
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>

        {/* Optional Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <a href="/contact" className="text-indigo-600 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
