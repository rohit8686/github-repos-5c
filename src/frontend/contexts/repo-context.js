import { createContext, useContext, useReducer } from "react";

const RepoContext = createContext();
export const useRepo = () => useContext(RepoContext);

export const RepoProvider = ({ children }) => {
  const initialState = {
    search: "",
    userData: [],
    repoData: [],
    errorMsg: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        return { ...state, search: action.payload };
      case "REPO_DATA":
        return { ...state, repoData: action.payload };
      case "DATA_NOT_FOUND":
        return { ...state, errorMsg: action.payload };
      case "CLEAR_ERROR":
        return { ...state, errorMsg: "" };
    }
  };

  const [repoState, repoDispatch] = useReducer(reducerFn, initialState);

  return (
    <RepoContext.Provider value={{ repoState, repoDispatch }}>
      {children}
    </RepoContext.Provider>
  );
};
