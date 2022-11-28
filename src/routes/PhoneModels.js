import logo from '../seal.png';
import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';


function createButtons(props) {
  var buttons = [];
  for (const phone_model of Object.keys(props.data)) {
    let buttonData = {};
    buttonData.route = "/servers";
    buttonData.data = props.data[phone_model];
    buttonData.title = phone_model;
    buttons.push(
      <OptionItem
        key={phone_model}
        name={phone_model}
        description={"Broadband testing for " + phone_model}
        data={buttonData}
        choice={"Go To " + phone_model}>
      </OptionItem>);
  }
  return buttons;
}

function PhoneModels() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband {location.state.title} Phone Models</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {createButtons(location.state)}
      </header>
    </div>
  );

}

export default PhoneModels;