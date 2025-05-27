import AuthContext from "@/context/AuthContext/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>

      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* here is the logo part */}
        <Link to="/" className="btn btn-ghost text-xl hidden lg:block">
          <img
            className="h-12 w-10"
            src="/src/assets/JOBBOX_LOGO.png"
            alt="JobBox Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="btn ml-4 hover:bg-purple-700 hover:text-white"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="text-purple-700 font-semibold hover:underline "
            >
              Register
            </Link>

            <Link
              to="/login"
              className="btn ml-4 hover:bg-purple-700 hover:text-white"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
