import logo from '../seal.png';
import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';


function createButtons(props) {
  var buttons = [];
  for (const server of Object.keys(props.data)) {
    let buttonData = {};
    var description;
    buttonData.route = "/graph";
    buttonData.data = props.data[server];
    buttonData.title = server;
    if (server.includes("total")) {
        continue;
    }
    if (server.includes("up")) {
        description = "Upload speeds from ";
    } else {
        description = "Download speeds from ";
    }
    if(server.includes("wTCP")) {
        description += "West Server";
    } else {
        description += "East Server";
    }
    buttons.push(
      <OptionItem
        key={server}
        name={server}
        description={description}
        data={buttonData}
        choice={"Go To " + server}>
      </OptionItem>);
  }
  return buttons;
}

function Servers() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband Server Tests for Phone Model {location.state.title}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {createButtons(location.state)}
      </header>
    </div>
  );

}

export default Servers;