import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import isEmpty from "./checkEmpty";
import doWeHaveToken from "./checkIfAutorized";
import Header from "./header";
import ReactLoading from "react-loading";
import WinLose from "./winLose";
import LeaderBoard from "./LeaderBoard";
import Footer from "./footer";
async function tournamentDetails(id) {
  const token = sessionStorage.getItem("token");
  try {
    const req = await fetch(
      `http://localhost:8189/api/v1/app/tournament/tourney/bracket/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const res = await req.json();

    return res;
  } catch {
    console.log("error");
  }
}

export default function ActiveTournamentPage() {
  const { id } = useParams();
  const [tournamentTable, setTable] = useState([]);
  const getTournament = useCallback(async () => {
    try {
      const data = await tournamentDetails(id);
      setTable(data);
    } catch {
      console.log("error");
    }
  });

  useEffect(() => {
    try {
      getTournament();
    } catch {
      console.log("error");
    }
  }, []);

  if (doWeHaveToken() && !isEmpty(tournamentTable)) {
    const startedDate = new Date(tournamentTable.startedDate);
    let test = new Date(startedDate.setDate(startedDate.getDate() - 1));
    const user = sessionStorage.getItem("user");
    const login = sessionStorage.getItem("login");
    return (
      <div className="activeTournamentPage">
        <Header />
        <div className="participantsInfo">
          <div className="mainPageTitle">
            <h2>Active Tournament</h2>
          </div>

          <div className="participantsElemets">
            <div className="tournayName">
              {tournamentTable.name} ({tournamentTable.type})
            </div>
            <div className="tournamentDate">
              {tournamentTable.startedDate}/{tournamentTable.finishedDate}
            </div>
            <div className="participantsInfoDescr">
              <div className="participantsListTtile">
                Tournament Desctiption
              </div>
              {tournamentTable.description}
            </div>
            <LeaderBoard id={id} />
            <div className="participantsList">
              {tournamentTable.roundList.map((elem, index) => {
                let day = test.getDay();
                if (day === 5) {
                  test = new Date(test.setDate(test.getDate() + 3));
                } else {
                  test = new Date(test.setDate(test.getDate() + 1));
                }
                const dateResult = test.toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                  // const weekDays = [
                  //   "Sunday",
                  //   "Monday",
                  //   "Tuesday",
                  //   "Wednesday",
                  //   "Thursday",
                  //   "Friday",
                  //   "Saturday",
                  // ];
                  // let day = startedDay + index;
                  // let dateDay = date + index;
                  // if (day === 0) {
                  //   day = 2;
                  //   dateDay += 2;
                  // }
                  // if (day === 6) {
                  //   day = 1;
                  //   dateDay += 1;
                  // }
                  // if (day > 6) {
                  //   day = day - 5;
                  //   dateDay += 1;
                  // }
                );
                return (
                  <div className="item">
                    <div className="dateTitle">
                      <div className="participantsListTtile">
                        Tournament Round {elem.stage}
                      </div>
                      <div key={index} className="roundDate">
                        {dateResult}
                      </div>
                    </div>

                    <div className="playsBox">
                      {elem.matches.map((element) => {
                        if (element.winner) {
                          if (user === element.winner) {
                            if (element.winner === element.username1) {
                              return (
                                <div className="playsWithBtn">
                                  <div key={element.login} className="plays">
                                    <div className="firstPlayer winner">
                                      {element.username1}
                                      <WinLose
                                        user={element.username1}
                                        userOpponent={element.username2}
                                        login={login}
                                        stage={elem.stage}
                                        tournamentId={id}
                                        winner={element.username1}
                                        haveWinner={true}
                                      />
                                    </div>
                                    <div className="secondPlayer">
                                      {element.username2}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            if (element.winner === element.username2) {
                              return (
                                <div className="playsWithBtn">
                                  <div key={element.login} className="plays">
                                    <div className="firstPlayer ">
                                      {element.username1}
                                    </div>
                                    <div className="secondPlayer winner">
                                      {element.username2}
                                      <WinLose
                                        user={element.username2}
                                        userOpponent={element.username1}
                                        login={login}
                                        stage={elem.stage}
                                        tournamentId={id}
                                        winner={element.username2}
                                        haveWinner={true}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          }
                        }
                        if (user === element.username1) {
                          if (element.winner === element.username2) {
                            return (
                              <div className="playsWithBtn">
                                <div key={element.login} className="plays">
                                  <div className="firstPlayer ">
                                    {element.username1}
                                    <WinLose
                                      user={element.username1}
                                      userOpponent={element.username2}
                                      login={login}
                                      stage={elem.stage}
                                      tournamentId={id}
                                      winner={element.username2}
                                      haveWinner={true}
                                    />
                                  </div>
                                  <div className="secondPlayer winner">
                                    {element.username2}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <div className="playsWithBtn">
                              <div key={element.login} className="plays">
                                <div className="firstPlayer ">
                                  {element.username1}
                                  <WinLose
                                    user={element.username1}
                                    userOpponent={element.username2}
                                    login={login}
                                    stage={elem.stage}
                                    tournamentId={id}
                                    haveWinner={false}
                                  />
                                </div>
                                <div className="secondPlayer">
                                  {element.username2}
                                </div>
                              </div>
                            </div>
                          );
                        }
                        if (user === element.username2) {
                          if (element.winner === element.username1) {
                            return (
                              <div className="playsWithBtn">
                                <div key={element.login} className="plays">
                                  <div className="firstPlayer winner">
                                    {element.username1}
                                  </div>
                                  <div className="secondPlayer ">
                                    {element.username2}
                                    <WinLose
                                      user={element.username1}
                                      userOpponent={element.username2}
                                      login={login}
                                      stage={elem.stage}
                                      tournamentId={id}
                                      winner={element.username1}
                                      haveWinner={true}
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <div className="playsWithBtn">
                              <div key={element.login} className="plays">
                                <div className="firstPlayer ">
                                  {element.username1}
                                </div>
                                <div className="secondPlayer">
                                  {element.username2}
                                  <WinLose
                                    user={element.username2}
                                    userOpponent={element.username1}
                                    login={login}
                                    stage={elem.stage}
                                    tournamentId={id}
                                    haveWinner={false}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        }
                        if (element.winner === element.username1) {
                          return (
                            <div key={element.login} className="plays">
                              <div className="firstPlayer winner">
                                {element.username1}
                              </div>
                              <div className="secondPlayer">
                                {element.username2}
                              </div>
                            </div>
                          );
                        }
                        if (element.winner === element.username2) {
                          return (
                            <div key={element.login} className="plays">
                              <div className="firstPlayer ">
                                {element.username1}
                              </div>
                              <div className="secondPlayer winner">
                                {element.username2}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <div key={element.login} className="plays">
                            <div className="firstPlayer ">
                              {element.username1}
                            </div>
                            <div className="secondPlayer">
                              {element.username2}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="activeTournamentPage">
      <Header />
      <ReactLoading color={"orange"} className="center" />
      <Footer />
    </div>
  );
}
