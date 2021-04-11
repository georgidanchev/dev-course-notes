import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found 🙁</h1>
      <p className="lead">The page you are looking for does not exist...</p>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default NotFound;
