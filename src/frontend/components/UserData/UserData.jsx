import React from "react";
import { useRepo } from "../../contexts/repo-context";
import { Link } from "react-router-dom";
import "./userdata.css";

export const UserData = () => {
  const {
    repoState: {
      userData: { name, followers, following, avatar_url },
      repoData,
      errorMsg,
    },
  } = useRepo();

  return (
    <>
      {!errorMsg && repoData.length !== 0 && (
        <div className="profile">
          <div className="flex flex-col mt-1">
            <img src={avatar_url} alt="profile" className="profile-img" />
            <p>{name}</p>
            <div className="flex">
              <Link to="/followers" className="link">
                <p>Followers : {followers}, </p>
              </Link>
              <p>Following : {following}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
