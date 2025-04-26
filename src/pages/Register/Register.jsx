import React from "react";
import registerLottieData from "../../assets/lottie/register.json";
import Lottie from "lottie-react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>

        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary">
            Create an Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

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
                Register
              </button>
            </div>

            <p className="text-center">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
