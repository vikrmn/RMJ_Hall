import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mb-4">Page not found</p>
      <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
