import React from "react";
import { Routes, Route } from "react-router-dom";
import { Repository } from "../components/Repository/Repository";
import { Home } from "../pages/Home/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:repoName" element={<Repository />} />
    </Routes>
  );
};
