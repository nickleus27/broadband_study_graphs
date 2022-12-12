import logo from '../calspeed.png';
import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

/*
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
*/

function TestOptions() {
  const location = useLocation();
  const [carrier, setCarrier] = useState("");
  const [phone_model, setPhoneModel] = useState("");
  const [server, setServer] = useState("");

  const onChangedCarrier = (event) => {
    setCarrier(event.target.value);
    console.log(event.target.value);
  }

  const onChangedPhoneModel = (event) => {
    setPhoneModel(event.target.value);
    console.log(event.target.value);
  }

  const onChangedServer = (event) => {
    setServer(event.target.value);
    console.log(event.target.value);
  }

  const radioOptions = (data, round, optionNum) => {
    return <div class="Radio-col-container">{_radioOptions(data, round, optionNum)}</div>;
  }

  const _radioOptions = (data, round, optionNum) => {
    if (carrier === "") {
      return carrierOptions(data, round, optionNum);
    }
    var radioButtons = [];
    radioButtons.push(carrierOptions(data, round, optionNum));
    var formPhones = phoneModelOptions(data, round, carrier, optionNum);
    if (formPhones !== null) {
      radioButtons.push(formPhones);
    }
    if (phone_model === "") {
      return radioButtons;
    }
    var formServers = serverOptions(data, round, carrier, phone_model, optionNum);
    if (formServers !== null) {
      radioButtons.push(formServers);
    }
    if (server === "") {
      return radioButtons;
    }
    radioButtons.push(createButton(data, round, carrier, phone_model, server, optionNum));
    return radioButtons;
  }

  const carrierOptions = (data, round, optionNum) => {
    const testDataObject = data[round];
    const carrierList = Object.keys(testDataObject);
    return (
      <div className='Radio-col-child-1'>Carriers:{carrierList.map(value => (
          <form>
            <label>
              <input
                type="radio"
                name={`Radio-Carrier-${optionNum}`}
                value={value}
                checked={carrier === value}
                onChange={onChangedCarrier}
              />{value}</label>
          </form>
        ))}</div>
    );
  }

  const phoneModelOptions = (data, round, carrier, optionNum) => {
    const testDataObject = data[round];
    if (!(carrier in testDataObject)) {
      setPhoneModel("");
      return null;
    }
    const phoneModel_list = Object.keys(testDataObject[carrier]);
    return (
      <div className='Radio-col-child-2'>Phone Models:{phoneModel_list.map(value => (
          <form>
            <label>
              <input
                type="radio"
                name={`Radio-Phone-${optionNum}`}
                value={value}
                checked={phone_model === value}
                onChange={onChangedPhoneModel}
              />{value}</label>
          </form>
        ))}</div>
    );
  }

  const serverOptions = (data, round, carrier, phoneModel, optionNum) => {
    const testDataObject = data[round];
    if (carrier === "" ) {
      setPhoneModel("");
      return null;
    }
    if (!(phoneModel in testDataObject[carrier])) {
      setPhoneModel("");
      setServer("");
      return null;
    }
    const serverList = Object.keys(testDataObject[carrier][phoneModel]);
    serverList.pop(); //get rid of total tests field
    return (
      <div className='Radio-col-child-3'>Server Tests:{serverList.map(value => (
          <form>
            <label>
              <input
                type="radio"
                name={`Radio-Server-${optionNum}`}
                value={value}
                checked={server === value}
                onChange={onChangedServer}
              />{value}</label>
          </form>
        ))}</div>
    );
  }

  const createButton = (data, round, carrier, phoneModel, server, optionNum) => {
    var buttonData = {};
    var description;
    buttonData.route = "/graph";
    buttonData.data = data;
    buttonData.title = {};
    buttonData.title.rounds = round;
    buttonData.title.carrier = carrier;
    buttonData.title.phone_model = phoneModel;
    buttonData.title.server = server;
    if (server.includes("up")) {
      description = "Upload speeds from ";
    } else {
      description = "Download speeds from ";
    }
    if (server.includes("wTCP")) {
      description += "West Server";
    } else {
      description += "East Server";
    }
    buttonData.title.description = description;
    return (
      <OptionItem
        key={server}
        name={server}
        description={description}
        data={buttonData}
        choice={"Go To Graph"}>
      </OptionItem>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband {location.state.title.rounds} Test Options</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {radioOptions(location.state.data, location.state.title.rounds, "1")}
      </header>
    </div>
  );
}

export default TestOptions;