import logo from '../calspeed.png';
import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';


function createButtons(props) {
  var buttons = [];
  var servers = props.data[props.title.rounds][props.title.carrier][props.title.phone_model];
  for (const server of Object.keys(servers)) {
    let buttonData = {};
    var description;
    buttonData.route = "/graph";
    buttonData.data = props.data;
    buttonData.title = Object.assign({}, props.title);
    buttonData.title.server = server;
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
    buttonData.title.description = description;
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
        <h2>Server Tests for: Carrier {location.state.title.carrier} Phone Model {location.state.title.phone_model}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {createButtons(location.state)}
      </header>
    </div>
  );

}

export default Servers;