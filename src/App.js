import logo from './seal.png';
import './App.css';
import './components/OptionItem.css';
import OptionItem from './components/OptionItem.js';
import { processData } from './library/getCSV';
import round14 from './assets/round14.csv';
import round15 from './assets/round15.csv';

const graphData = {};
const rounds = ["Round 14", "Round 15", "Round 16"];
const csvRounds = [round14, round15];

function createButtons(rounds) {
  var buttons = [];
  var year = 20;
  for (const round of rounds) {
    buttons.push(<OptionItem name={round} description={"Broadband testing for the year 20" + year}
      choice={"Go To " + round}></OptionItem>);
    year++;
  }
  return buttons;
}

function createGraphData(graphData, rounds, csvRounds) {
  /* we do not have data for round 16 yet */
  for (let i = 0; i < csvRounds.length; i++) {
    fetch(csvRounds[i])
      .then((csv) => csv.text())
      .then(text => {
        graphData[rounds[i]] = processData(text);
      });
  }
}

function App() {
  createGraphData(graphData, rounds, csvRounds);
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband Study</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {createButtons(rounds)}
      </header>
    </div>
  );
}

export default App;
