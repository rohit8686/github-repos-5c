import React from "react";
import { useRepo } from "../../contexts/repo-context";
import { getRepoData, getUserData } from "../../services/repoService";
import "./search.css";

export const Search = () => {
  const {
    repoState: { search },
    repoDispatch,
  } = useRepo();

  const searchHandler = async (search) => {
    const repoData = await getRepoData(search);
    const userData = await getUserData(search);

    if (repoData === "User not found") {
      repoDispatch({ type: "DATA_NOT_FOUND", payload: repoData });
    } else {
      repoDispatch({ type: "CLEAR_ERROR" });
      repoDispatch({ type: "REPO_DATA", payload: repoData });
    }
  };

  return (
    <div className="flex mt-1">
      <input
        type="search"
        className="search"
        placeholder="Enter Repository name"
        onChange={(e) =>
          repoDispatch({ type: "SEARCH", payload: e.target.value })
        }
      />
      <button className="btn" onClick={() => searchHandler(search)}>
        Search
      </button>
    </div>
  );
};
