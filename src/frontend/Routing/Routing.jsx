import React from "react";
import { Routes, Route } from "react-router-dom";
import { FollowerRepository } from "../components/FollowerRepository/FollowerRepository";
import { Followers } from "../components/Followers/Followers";
import { FollowersRepositories } from "../components/FollowersRepositories/FollowersRepositories";
import { Repository } from "../components/Repository/Repository";
import { Home } from "../pages/Home/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:repoName" element={<Repository />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/followers/:user" element={<FollowersRepositories />} />
      <Route
        path="/followers/:user/:repoName"
        element={<FollowerRepository />}
      />
    </Routes>
  );
};
