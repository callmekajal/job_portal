import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-500">
            Sign in to continue to your account.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
        <button
  type="button"
  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-medium text-gray-700 hover:bg-gray-50"
>
  <FcGoogle size={24} />
  Continue with Google
</button>

          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
      
    </section>
  );
};

export default Login;