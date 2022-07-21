import React from "react";
import { useRepo } from "../../contexts/repo-context";
import { Link } from "react-router-dom";
import "./repositories.css";

export const Repositories = () => {
  const {
    repoState: { repoData, errorMsg },
  } = useRepo();

  return (
    <>
      {(repoData.length !== 0 || errorMsg) && (
        <div className="repos flex">
          {errorMsg && <div className="repos flex">{errorMsg}</div>}
          {!errorMsg &&
            repoData.map(({ id, name, description, owner }) => {
              return (
                <div
                  key={id}
                  className="repo flex justify-start align-self-start no-wrap "
                >
                  <Link to={`/${name}`} className="link align-self-start">
                    <img
                      src={owner.avatar_url}
                      alt="profile"
                      className="repo-img"
                    />
                  </Link>
                  <Link to={`/${name}`} className="link">
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
      )}
    </>
  );
};
