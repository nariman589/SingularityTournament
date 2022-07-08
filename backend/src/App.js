import ActiveTournaments from "./components/activeTournament/activeTournaments";
import doWeHaveToken from "./components/functions/checkIfAutorized";
import CreateTournament from "./components/createTpurnament/CreateTournament";
import Footer from "./components/pageElements/footer";
import Header from "./components/pageElements/header";
import Tournaments from "./components//openTournament/Tournaments";
import LastFact from "./components/functions/LastFact";

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
          <h2>Last Facts</h2>
        </div>
        <LastFact />

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
