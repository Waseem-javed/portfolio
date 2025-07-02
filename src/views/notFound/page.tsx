import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <h1 className="text-4xl font-bold mb-4 text-red-400">404</h1>
      <p className="mb-4 text-red-200">Page Not Found!</p>
    </div>
  );
};

export default NotFound;
