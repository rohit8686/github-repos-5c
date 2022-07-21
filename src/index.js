import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RepoProvider } from "./frontend/contexts/repo-context";
import { FollowersProvider } from "./frontend/contexts/followers-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RepoProvider>
        <FollowersProvider>
          <App />
        </FollowersProvider>
      </RepoProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
