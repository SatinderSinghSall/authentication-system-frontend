import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import ScreenLoader from "./ScreenLoader";
import apis from "../utils/api";
import httpAction from "../utils/httpAction";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const result = await httpAction({
          url: apis().profileUser,
        });

        setAuthenticated(result?.status === true);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <ScreenLoader open={true} text="Checking authentication..." />;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
