import { Link, useNavigate } from "react-router-dom";
import NavLinks from "../NavLink/NavLinks";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Context";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
 

  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success("Logout successfully!", { position: "top-center" });
      setDropdownOpen(false);
      navigate("/");
    } catch (err) {
      toast.error(err.message ? err.message : "Logout failed, try again!", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden cursor-pointer hover:bg-gray-500 duration-500 hover:"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3  w-24 p-1 shadow bg-[#244135] font-poppins-specialEle "
            >
              <NavLinks></NavLinks>
            </ul>
          </div>
          <a className="  text-xl font-bold ml-2 font-lora-heading" href="/">
            <h3>
              <span className="">Futur</span>{" "}
              <span className="text-[#28A745]">Edge</span>
            </h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins-specialEle font-semibold text-base">
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="navbar-end  font-poppins-specialEle text-lg font-bold">
          {user ? (
            <div className="relative">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
              />

              {dropdownOpen && (
                <div className="absolute right-0 mt-2  bg-gray-100 text-black shadow-sm rounded-md z-50">
                  <Link
                    to="/profile"
                    className="block px-2 text-sm py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className=" px-2 py-2 text-sm hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={"/auth/login"}
              className="cursor-pointer p-1 rounded hover:bg-gray-500 duration-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
