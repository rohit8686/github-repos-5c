import React, { useEffect } from "react";
import { useFollowers } from "../../contexts/followers-context";
import { useRepo } from "../../contexts/repo-context";
import { getFollowersData } from "../../services/followerService";
import { Link } from "react-router-dom";
import "./followers.css";

export const Followers = () => {
  const {
    repoState: {
      userData: { login },
    },
  } = useRepo();
  const {
    followersState: { followersData },
    followersDispatch,
  } = useFollowers();

  useEffect(() => {
    (async () => {
      const res = await getFollowersData(login);
      if (res === "Error in fetching followers details") {
        followersDispatch({
          type: "DATA_NOT_FOUND",
          payload: res,
        });
      } else {
        followersDispatch({ type: "CLEAR_ERROR" });
        followersDispatch({ type: "FOLLOWERS_DATA", payload: res });
      }
    })();
  }, [followersDispatch, login]);

  return (
    <>
      <h2 className="text-center mt-1">Followers </h2>
      <div className="follower">
        {followersData.map(({ id, avatar_url, login, html_url }) => {
          return (
            <div key={id}>
              <Link to={`/followers/${login}`} className="link">
                <div className="p-1 flex justify-start">
                  <img src={avatar_url} alt="profile" className="repo-img" />
                  <div>
                    <p>{login}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
