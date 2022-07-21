import { createContext, useContext, useReducer } from "react";

const FollowersContext = createContext();
export const useFollowers = () => useContext(FollowersContext);

export const FollowersProvider = ({ children }) => {
  const initialState = {
    followersData: [],
    followerRepos: [],
    errorMsg: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "FOLLOWERS_DATA":
        return { ...state, followersData: action.payload };
      case "FOLLOWER_REPOS":
        return { ...state, followerRepos: action.payload };
      case "DATA_NOT_FOUND":
        return { ...state, errorMsg: action.payload };
      case "CLEAR_ERROR":
        return { ...state, errorMsg: "" };
      default:
        return { ...state };
    }
  };

  const [followersState, followersDispatch] = useReducer(
    reducerFn,
    initialState
  );

  return (
    <FollowersContext.Provider value={{ followersState, followersDispatch }}>
      {children}
    </FollowersContext.Provider>
  );
};
