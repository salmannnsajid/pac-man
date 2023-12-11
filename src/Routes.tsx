import React from "react";

import { GamePage } from "./pages/GamePage/GamePage";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Signup from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/pac-man" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
