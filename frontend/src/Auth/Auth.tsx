import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const getStoredAuthToken = () => localStorage.getItem("jwtID");

const storeAuthToken = (token: string) => localStorage.setItem("jwtID", token);

// const removeStoredAuthToken = () => localStorage.removeItem("jwtID");
const Authenticate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        const { jwtID } = await fetch("https:localhost:5000/auth", {
          method: "POST",
        }).then((res) => res.json());
        storeAuthToken(jwtID);
        navigate("/app");
      } catch (error) {
        console.log(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [navigate]);

  return <span>Loading ....</span>;
};

export default Authenticate;
