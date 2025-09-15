import React from "react";

const Login = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          
           <div>
            <label className="block text-gray-700 font-medium mb-1">
              Role
            </label>
        <select
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
  defaultValue=""
>
  <option value="user">Founder</option>
  <option value="investor">Investor</option>
  <option value="admin">Admin</option>
</select>
           
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-yellow-600 hover:underline">
              Sign Up
            </a>
          </p>
          <p className="mt-2">
            <a href="/forgot-password" className="text-yellow-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;