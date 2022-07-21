import React from "react";
import { useParams } from "react-router-dom";
import { useRepo } from "../../contexts/repo-context";
import "./repository.css";

export const Repository = () => {
  const {
    repoState: { repoData },
  } = useRepo();
  const { repoName } = useParams();
  console.log(repoName);
  const singleRepoData = repoData.find(({ name }) => name === repoName);

  const {
    name,
    description,
    owner: { avatar_url },
    topics,
  } = singleRepoData;

  return (
    <div className="flex mt-1 align-start">
      <div className="flex flex-col repo-category">
        <img src={avatar_url} alt="profile" className="repo-img-lg" />
        <p>✅ Verified by GitHub</p>
        <p className="small-text">
          GitHub confirms that this app meets the requirements for verification
        </p>
        <p className="mt-1">Categories</p>
        {topics.length === 0 ? (
          <p className="small-text">No Categories</p>
        ) : (
          <div className="flex justify-start">
            {topics.map((topic) => {
              return <p className="topic">{topic}</p>;
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start align-start p-1 repo-details">
        <p className="application">Application</p>
        <h3>{name}</h3>
        <button className="plan-btn">Set up a plan</button>
        <p>{description}</p>
      </div>
    </div>
  );
};
