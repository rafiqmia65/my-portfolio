import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content px-4">
      {/* Background Shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-96 h-96 bg-primary/20 blur-3xl rounded-full absolute -top-24 -left-24 animate-pulse"></div>
        <div className="w-72 h-72 bg-secondary/30 blur-2xl rounded-full absolute bottom-0 right-0 animate-pulse delay-200"></div>
      </div>

      {/* Error Content */}
      <div className="text-center z-10">
        <h1 className="text-[7rem] font-extrabold text-primary leading-none drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl font-semibold mb-4">Oops! Page Not Found</p>
        <p className="text-base text-base-content/70 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Please
          check the URL or return to the homepage.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-medium rounded-lg shadow hover:bg-secondary transition-transform hover:-translate-y-1"
        >
          <FaHome />
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
