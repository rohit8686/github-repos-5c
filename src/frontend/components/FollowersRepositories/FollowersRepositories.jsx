import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFollowerRepos } from "../../services/followerService";
import { useFollowers } from "../../contexts/followers-context";
import { Link } from "react-router-dom";

export const FollowersRepositories = () => {
  const navigate = useNavigate();

  const {
    followersState: { followerRepos },
    followersDispatch,
  } = useFollowers();

  const { user } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getFollowerRepos(user);
      followersDispatch({ type: "FOLLOWER_REPOS", payload: res });
    })();
  }, [followersDispatch, user]);

  return (
    <div>
      <div className="flex mt-1">
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      <div className="repos flex">
        {followerRepos.map(({ id, name, description, owner }) => {
          return (
            <div
              key={id}
              className="repo flex justify-start align-self-start no-wrap "
            >
              <Link to={`${name}`} className="link align-self-start">
                <img
                  src={owner.avatar_url}
                  alt="profile"
                  className="repo-img"
                />
              </Link>
              <Link to={`${name}`} className="link align-self-start">
                <div>
                  <h4>
                    {name?.length > 30 ? `${name?.substr(0, 30)}..` : name}
                  </h4>
                  <p>
                    {description?.length > 80
                      ? `${description?.substr(0, 80)}...`
                      : description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
