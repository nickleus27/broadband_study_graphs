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
    return <div className="Radio-col-container">{_radioOptions(data, round, optionNum)}</div>;
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
      <div key='Radio-col-child-1' className='Radio-col-child-1'>Carriers:{carrierList.map(value => (
        <form key={value}>
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
      <div key='Radio-col-child-2' className='Radio-col-child-2'>Phone Models:{phoneModel_list.map(value => (
        <form key={value}>
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
    if (carrier === "") {
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
      <div key='Radio-col-child-3' className='Radio-col-child-3'>Server Tests:{serverList.map(value => (
        <form key={value}>
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
    var descriptionSpeeds;
    var descriptionErrors;
    buttonData.route = "/graph";
    buttonData.data = data;
    buttonData.title = {};
    buttonData.title.rounds = round;
    buttonData.title.carrier = carrier;
    buttonData.title.phone_model = phoneModel;
    buttonData.title.server = server;
    buttonData.title.tests = "speeds";
    if (server.includes("up")) {
      descriptionSpeeds = "Upload speeds from ";
      descriptionErrors = "Upload errors from "
    } else {
      descriptionSpeeds = "Download speeds from ";
      descriptionErrors = "Download errors from ";
    }
    if (server.includes("wTCP")) {
      descriptionSpeeds += "West Server";
      descriptionErrors += "West Server";
    } else {
      descriptionSpeeds += "East Server";
      descriptionErrors += "East Server";
    }
    buttonData.title.description = descriptionSpeeds;

    var buttonDataErrors = {};
    var titleErrors = structuredClone(buttonData.title);
    buttonDataErrors.data = data;
    buttonDataErrors.route = "/graph";
    buttonDataErrors.title = titleErrors;
    buttonDataErrors.title.tests = "errors";
    buttonDataErrors.title.description = descriptionErrors;
    return (
      <div key="goto-buttons">
        <OptionItem
          key={`speeds-${server}`}
          name={server}
          description={descriptionSpeeds}
          data={buttonData}
          choice={"Go To Graph"}>
        </OptionItem>
        <OptionItem
          key={`errors-${server}`}
          name={server}
          description={descriptionErrors}
          data={buttonDataErrors}
          choice={"Go To Graph"}>
        </OptionItem>
      </div>);
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