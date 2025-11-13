import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-50 via-white to-red-50 text-center px-4">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-red-500 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-24 h-24 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </motion.div>

      {/* Error Info */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
      >
        Oops!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-600 text-lg mb-2"
      >
        Sorry, something went wrong.
      </motion.p>

      <p className="text-gray-400 mb-8">
        {error?.statusText || error?.message || "Page not found."}
      </p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition transform shadow-lg"
        >
          ⬅ Back to Home
        </Link>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-full font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
        >
          🔄 Try Again
        </button>
      </motion.div>

      {/* Footer text */} 
      <p className="mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} CarRent — All rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
