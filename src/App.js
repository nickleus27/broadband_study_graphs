import logo from './seal.png';
import './App.css';
import './components/OptionItem.css';
import OptionItem from './components/OptionItem.js';
import { processData } from './library/getCSV';
import round14 from './assets/round14.csv';
import round15 from './assets/round15.csv';

const testData = {};

function App() {
  fetch(round14)
    .then((r) => r.text())
    .then(text => {
      testData["round14"] = processData(text);
    })
    fetch(round15)
    .then((r) => r.text())
    .then(text => {
      testData["round15"] = processData(text);
      console.log();
    })
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband Study</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <OptionItem name={"Round 14"} description={"Broadband testing for the year 2020"}
          choice={"Go To Round 14"}></OptionItem>
        <OptionItem name={"Round 15"} description={"Broadband testing for the year 2021"}
          choice={"Go To Round 15"}></OptionItem>
        <OptionItem name={"Round 16"} description={"Broadband testing for the year 2022"}
          choice={"Go To Round 16"}></OptionItem>
      </header>
    </div>
  );
}

export default App;
