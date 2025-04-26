import Lottie from "lottie-react";
import React, { useContext } from "react";
import loginLottieData from "../../assets/lottie/login.json";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

export default function Login() {
  const { signInUserWithEmail, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signInUserWithEmail(email, password)
      .then((result) => {
        console.log("logged in user", result.user);
        alert("User logged in successfully");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };
  // sign in with google
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign-In Success", result.user);
        alert("Google Sign-In successful");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden">
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary">
            Create an Account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a secure password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline w-full"
              >
                <img
                  src="https://icon2.cleanpng.com/20240216/yhs/transparent-google-logo-google-logo-with-colorful-letters-on-black-1710875297222.webp"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>
            </div>
            <p className="text-center">
              Didn't have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
      </div>
    </div>
  );
}
