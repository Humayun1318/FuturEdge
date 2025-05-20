import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Context";
import {
  FaUser,
  FaEnvelope,
  FaGoogle,
  FaGithub,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaPen,
  FaCamera,
  FaSave,
  FaTimes,
  FaLink,
} from "react-icons/fa";
import { toast } from "react-toastify";
import GradientLoader from "../../components/Loader/GradientLoader";
const Profile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);
  const [editMode, setEditMode] = useState({
    name: false,
    photo: false,
  });
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || user.email?.split("@")[0] || "User",
        photoURL:
          user.photoURL ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      });
    }
  }, [user]);

  const handleUpdateProfile = async (field) => {
    try {
      await updateProfileInfo(
        field === "name" ? formData.displayName : user.displayName,
        field === "photo" ? formData.photoURL : user.photoURL
      );

      toast.success(
        `${field === "name" ? "Name" : "Photo"} updated successfully!`,
        {
          position: "top-center",
        }
      );
      setEditMode({ ...editMode, [field]: false });
    } catch (error) {
      toast.error(`Error updating ${field}: ${error.message}`, {
        position: "top-center",
      });
    }
  };

  if (!user) return <GradientLoader></GradientLoader>;

  const isGoogleUser = user.providerData?.some(
    (p) => p.providerId === "google.com"
  );
  const isGithubUser = user.providerData?.some(
    (p) => p.providerId === "github.com"
  );
  const isEmailUser = user.providerData?.some(
    (p) => p.providerId === "password"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 relative pt-24">
      {/* Main Content - Becomes dim when modal is open */}
      <div
        className={`max-w-3xl mx-auto bg-white rounded-2xl border-0 overflow-hidden transition-all duration-200 ${
          editMode.photo ? "opacity-75 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Teal Gradient Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-teal-500 to-cyan-600"></div>

        {/* Profile Section */}
        <div className="px-8 pb-8 -mt-16">
          {/* Profile Picture with Camera Icon */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <img
                className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-xl object-cover"
                src={formData.photoURL}
                alt="Profile"
                onError={(e) => {
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                }}
              />
              <button
                onClick={() => setEditMode({ ...editMode, photo: true })}
                className="absolute bottom-0 right-0 bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-all shadow-md cursor-pointer"
              >
                <FaCamera />
              </button>
            </div>

            {/* Name Section with Pen Icon */}
            <div className="mt-6 text-center relative">
              {editMode.name ? (
                <div className="flex flex-col items-center space-y-4">
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) =>
                      setFormData({ ...formData, displayName: e.target.value })
                    }
                    className="text-3xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg text-center w-full max-w-md"
                    placeholder="Enter your name"
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleUpdateProfile("name")}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition cursor-pointer"
                    >
                      <FaSave /> <span>Save</span>
                    </button>
                    <button
                      onClick={() => {
                        setEditMode({ ...editMode, name: false });
                        setFormData({
                          ...formData,
                          displayName:
                            user.displayName ||
                            user.email?.split("@")[0] ||
                            "User",
                        });
                      }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center space-x-2 hover:bg-gray-300 transition cursor-pointer"
                    >
                      <FaTimes /> <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-gray-800">
                    {formData.displayName}
                  </h1>
                  <button
                    onClick={() => setEditMode({ ...editMode, name: true })}
                    className="mt-2 text-teal-600 hover:text-teal-700 transition p-2 cursor-pointer"
                  >
                    <FaPen />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Auth Provider Badges */}
          <div className="flex justify-center space-x-3 mt-4">
            {isGoogleUser && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm">
                <FaGoogle className="mr-1" /> Google
              </span>
            )}
            {isGithubUser && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
                <FaGithub className="mr-1" /> GitHub
              </span>
            )}
            {isEmailUser && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                <FaEnvelope className="mr-1" /> Email
              </span>
            )}
          </div>

          {/* User Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <FaUser className="mr-2 text-teal-600" /> Basic Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <p className="mt-1 text-gray-800">{user.email}</p>
                  {user.emailVerified ? (
                    <span className="inline-flex items-center mt-1 text-xs text-teal-600">
                      <FaCheckCircle className="mr-1" /> Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center mt-1 text-xs text-amber-600">
                      <FaClock className="mr-1" /> Unverified
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    User ID
                  </label>
                  <p className="mt-1 text-gray-800 font-mono text-sm break-all">
                    {user.uid}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <FaGlobe className="mr-2 text-teal-600" /> Activity
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Last Sign In
                  </label>
                  <p className="mt-1 text-gray-800">
                    {user.metadata?.lastSignInTime
                      ? new Date(user.metadata.lastSignInTime).toLocaleString()
                      : "Unknown"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Account Created
                  </label>
                  <p className="mt-1 text-gray-800">
                    {new Date(user.metadata.creationTime).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo URL Edit Modal - Now appears over dimmed content */}
      {editMode.photo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Update Profile Photo
            </h3>
            <div className="flex items-center space-x-2 mb-6">
              <FaLink className="text-teal-600 flex-shrink-0" />
              <input
                type="text"
                value={formData.photoURL}
                onChange={(e) =>
                  setFormData({ ...formData, photoURL: e.target.value })
                }
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setEditMode({ ...editMode, photo: false });
                  setFormData({
                    ...formData,
                    photoURL:
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                  });
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateProfile("photo")}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
