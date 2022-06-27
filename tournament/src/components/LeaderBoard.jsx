import { useCallback, useEffect, useState } from "react";
import isEmpty from "./checkEmpty";
import ReactLoading from "react-loading";

export default function LeaderBoard(id) {
  const [leaderboard, setLeaderBoard] = useState();

  const makeReq = useCallback(async () => {
    const token = sessionStorage.getItem("token");
    const req = await fetch(
      `http://localhost:8189/api/v1/app/tournament/tourney/leaderboard/${id.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await req.json();
    setLeaderBoard(res);
  }, []);

  useEffect(() => {
    try {
      makeReq();
    } catch (err) {
      console.log(err);
    }
  }, [makeReq]);

  if (!isEmpty(leaderboard)) {
    const leaders = leaderboard.slice(0, 3);
    const others = leaderboard.slice(3);
    console.log(leaders);
    return (
      <div className="LeaderBoard">
        <div className="leaderBoardTitle">Leaderboard</div>
        <div className="leaders">
          <div className="fisrtPlace">
            <div className="leadersImg">
              <img src="logos/first.png" alt="1place" />
            </div>
            <div className="leaderName">
              {leaders[0].name} Score({leaders[0].score})
            </div>
          </div>
          <div className="secondPlace">
            <div className="leadersImg">
              <img src="logos/2place.png" alt="2place" />
            </div>
            <div className="leaderName">
              {leaders[1].name} Score({leaders[1].score})
            </div>
          </div>
          <div className="thirdPlace">
            <div className="leadersImg">
              <img src="logos/3place.png" alt="3place" />
            </div>
            <div className="leaderName">
              {leaders[2].name} Score({leaders[2].score})
            </div>
          </div>
        </div>
        {others.map((elem) => {
          return (
            <div className="leaderboardElem" key={elem.name}>
              <div className="leaderboardElemName">
                Name: {elem.name} {elem.surname}
              </div>
              <div className="score"> Score: {elem.score}</div>
            </div>
          );
        })}
      </div>
    );
  }
  return <ReactLoading color={"orange"} className="center" />;
}
