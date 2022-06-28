import { useEffect } from "react";
import ActiveTournaments from "./components/activeTournaments";
import doWeHaveToken from "./components/checkIfAutorized";
import CreateTournament from "./components/CreateTournament";
import Footer from "./components/footer";
import Header from "./components/header";
import Tournaments from "./components/Tournaments";

function App() {
  if (doWeHaveToken()) {
    return (
      <div className="App">
        <Header />
        {/* <div className="BodyImage">
          <div className="hover"></div>
          <img
            src="https://ustroim-prazdnik.info/_ph/34/2/72139923.jpg?1567752161"
            alt="command picture"
          />
        </div> */}

        <div className="mainPageTitle">
          <h2>Tournaments</h2>
        </div>
        <CreateTournament />
        <Tournaments />
        <div className="mainPageTitle">
          <h2>Active Tournaments</h2>
        </div>
        <ActiveTournaments />
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      {/* <div className="BodyImage">
        <div className="hover"></div>
        <img
          src="https://ustroim-prazdnik.info/_ph/34/2/72139923.jpg?1567752161"
          alt="command picture"
        />
      </div> */}

      <div className="mainPageTitle">
        <h2>Tournaments</h2>
      </div>
      <Tournaments />
      <div className="mainPageTitle">
        <h2>Active Tournaments</h2>
      </div>
      <ActiveTournaments />
      <Footer />
    </div>
  );
}

export default App;
