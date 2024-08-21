import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangeLang from "./businesslogic/switchLanguages/ChangeLang";
import LoginPage from "./businesslogic/preloginScreens/login/LoginPage";
import Dashboard from "./businesslogic/dashboard/index";
import vectorImage1 from "./images/Vectors.png";


function Home() {
  return (
    <div className="card-height">
      <ChangeLang />
      <div className="padding-top-vector">
        <div className="padding-left-right">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <div>
          <img
            width={"100%"}
            src={vectorImage1}
            alt="vector"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
