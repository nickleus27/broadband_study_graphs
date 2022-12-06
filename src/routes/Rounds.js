import logo from '../calspeed.png';
import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { graphData } from '../library/getCSV';
import React from 'react';

function createButtons() {
  var buttons = [];
  var year = 20;
  for (const rounds of Object.keys(graphData)) {
    var buttonData = {};
    buttonData.route = "/carriers";
    buttonData.data = graphData;//[rounds];
    buttonData.title = {rounds};
    buttons.push(
      <OptionItem key={rounds}
        name={rounds}
        description={"Broadband testing for the year 20" + year}
        data={buttonData}
        choice={"Go To " + rounds}>
      </OptionItem>);
    year++;
  }
  return buttons;
}

function Rounds() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband Study</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {createButtons()}
      </header>
    </div>
  );
}


export default Rounds;