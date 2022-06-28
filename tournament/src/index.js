import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import NotFoundPage from "./components/NotFoundPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import CreateTournamentPage from "./components/createTournamentPage";
import Profile from "./components/profile";
import TournamentPage from "./components/tournamentPage";
import ServerError from "./components/500";
import ActiveTournamentPage from "./components/activeTournamentsPage";
import Developers from "./components/developers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="*" exact={true} element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/createTournament" element={<CreateTournamentPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tournament/:id" element={<TournamentPage />} />
        <Route path="/active/:id" element={<ActiveTournamentPage />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
