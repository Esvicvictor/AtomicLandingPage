import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="bg-slate-900 text-white text-center text-4xl min-h-screen ">
        <h2 className="py-40">Page Error 😒😒😒</h2>
        <Link to='/'> Back to home </Link>
      </div>
    </div>
  );
};

export default Error;
