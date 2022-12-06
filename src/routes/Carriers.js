import logo from '../calspeed.png';
import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';


function createButtons(props) {
  var buttons = [];
  for (const carrier of Object.keys(props.data[props.title.rounds])) {
    let buttonData = {};
    buttonData.route = "/phone_models";
    buttonData.data = props.data;
    buttonData.title = Object.assign({}, props.title);
    buttonData.title.carrier = carrier;
    buttons.push(
      <OptionItem
        key={carrier}
        name={carrier}
        description={"Broadband testing for " + carrier}
        data={buttonData}
        choice={"Go To " + carrier}>
      </OptionItem>);
  }
  return buttons;
}

function Carriers() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband {location.state.title.rounds} Carriers</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {createButtons(location.state)}
      </header>
    </div>
  );

}

export default Carriers;