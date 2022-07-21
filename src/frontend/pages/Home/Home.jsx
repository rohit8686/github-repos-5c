import React from "react";
import { Repositories } from "../../components/Repositories/Repositories";
import { Search } from "../../components/Search/Search";
import { UserData } from "../../components/UserData/UserData";

export const Home = () => {
  return (
    <>
      <Search />
      <UserData />
      <Repositories />
    </>
  );
};
