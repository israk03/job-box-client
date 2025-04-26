import React from "react";
import registerLottieData from "../../assets/lottie/register.json";
import Lottie from "lottie-react";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = { name, email, password };
    console.log(user);

    // password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }
  };
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

          <form onSubmit={handleRegister} className="space-y-4">
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

            <div>
              <button type="button" className="btn btn-outline w-full">
                <img
                  src="https://icon2.cleanpng.com/20240216/yhs/transparent-google-logo-google-logo-with-colorful-letters-on-black-1710875297222.webp"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
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
