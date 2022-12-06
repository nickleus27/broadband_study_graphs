import logo from './calspeed.png';
import './components/CustomButton.css';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import { graphData, processData } from './library/getCSV';
import round14 from './assets/round14.csv';
import round15 from './assets/round15.csv';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(round14)
          .then((csv) => csv.text())
          .then(text => {
            graphData["Round 14"] = processData(text);
          });
        fetch(round15)
          .then((csv) => csv.text())
          .then(text => {
            graphData["Round 15"] = processData(text);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband Study</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link className="option-choice__button" to="/">Home</Link> |{" "}
          <Link className="option-choice__button" to="/rounds">Yearly Testing Results</Link> | {" "}
          <Link className="option-choice__button" to="/about">About</Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
