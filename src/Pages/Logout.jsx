import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        alert("You have been logged out.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;