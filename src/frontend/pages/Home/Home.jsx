import React from "react";
import { Repositories } from "../../components/Repositories/Repositories";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  return (
    <>
      <Search />
      <Repositories />
    </>
  );
};
