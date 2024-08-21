/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ChangeLang from "../businesslogic/switchLanguages/ChangeLang";
import LoginPage from "../businesslogic/preloginScreens/login/LoginPage";
import Dashboard from "../businesslogic/dashboard/index";
import vectorImage1 from "../images/Vectors.png";
import vectorMobile from "../images/vectorMobile.png";
import { AuthProtected } from "./authProtected";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const isRememberMe = localStorage.getItem("isRememberMe");
    if (isRememberMe === "false") {
      localStorage.clear();
      navigate('/login');
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="card-height">
      <ChangeLang />
      <div className="padding-top-vector">
        <div className="padding-left-right">
          <Routes>
            <Route
              path="/login"
              element={<LoginPage screenWidth={screenWidth} />}
            />
            <Route
              path="/"
              element={<LoginPage screenWidth={screenWidth} />}
            />

            <Route
              path="/dashboard"
              element={
                <AuthProtected>
                  <Dashboard screenWidth={screenWidth} />
                </AuthProtected>
              }
            />
          </Routes>
        </div>
        <div>
          {screenWidth > 1023 ? (
            <img width={"100%"} src={vectorImage1} alt="vector" />
          ) : (
            <img width={"100%"} src={vectorMobile} alt="vector" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
