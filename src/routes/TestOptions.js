import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import logo from '../calspeed.png';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';

/**
 * TODO: set up graph comparison buttons
 */

function TestOptions() {
  const location = useLocation();
  const [carrier, setCarrier] = useState("");
  const [carrier2, setCarrier2] = useState("");
  const [phone_model, setPhoneModel] = useState("");
  const [phone_model2, setPhoneModel2] = useState("");
  const [server, setServer] = useState("");
  const [server2, setServer2] = useState("");

  const onChangedCarrier = (event) => {
    setCarrier(event.target.value);
    setPhoneModel("");
    setServer("");
    setCarrier2("");
    setPhoneModel2("");
    setServer2("");
    console.log(event.target.value);
  }

  const onChangedCarrier2 = (event) => {
    setCarrier2(event.target.value);
    setPhoneModel2("");
    setServer2("");
    console.log(event.target.value);
  }

  const onChangedPhoneModel = (event) => {
    setPhoneModel(event.target.value);
    console.log(event.target.value);
  }

  const onChangedPhoneModel2 = (event) => {
    setPhoneModel2(event.target.value);
    console.log(event.target.value);
  }

  const onChangedServer = (event) => {
    setServer(event.target.value);
    console.log(event.target.value);
  }

  const onChangedServer2 = (event) => {
    setServer2(event.target.value);
    console.log(event.target.value);
  }

  const radioOptions = (data, round, optionNum) => {
    if (optionNum === '1') {
      return <div className="Radio-col-container">{_radioOptions(data, round, optionNum)}</div>;
    } else {
      return (
        <div>
          <div>Graph 2 Options:</div>
          <div className="Radio-col-container">{_radioOptions(data, round, optionNum)}</div>
        </div>
      );
    }
  }

  const _radioOptions = (data, round, optionNum) => {
    var radioButtons = [];
    if (optionNum === '1') {
      radioButtons.push(carrierOptions(data, round, optionNum));
      if (carrier === "") {
        return radioButtons;
      }
      radioButtons.push(phoneModelOptions(data, round, carrier, optionNum));
      if (phone_model === "") {
        return radioButtons;
      }
      radioButtons.push(serverOptions(data, round, carrier, phone_model, optionNum));
      if (server === "") {
        return radioButtons;
      }
      radioButtons.push(createButton(data, round, carrier, phone_model, server, optionNum));
      return radioButtons;
    } else if (optionNum === '2' && server !== "") {
      radioButtons.push(carrierOptions(data, round, optionNum));
      if (carrier2 === "") {
        return radioButtons;
      }
      radioButtons.push(phoneModelOptions(data, round, carrier2, optionNum));
      if (phone_model2 === "") {
        return radioButtons;
      }
      radioButtons.push(serverOptions(data, round, carrier2, phone_model2, optionNum));
      if (server2 === "") {
        return radioButtons;
      }
      radioButtons.push(createButton(data, round, carrier2, phone_model2, server2, optionNum));
      return radioButtons;
    }
  }

  const carrierOptions = (data, round, optionNum) => {
    const testDataObject = data[round];
    const carrierList = Object.keys(testDataObject);
    return (
      <div key={`Radio-col-child-1-${optionNum}`} className='Radio-col-child-1'>Carriers:{carrierList.map(value => (
        <form key={`${value}-${optionNum}`}>
          <label>
            <input
              type="radio"
              name={`Radio-Carrier-${optionNum}`}
              value={value}
              checked={optionNum === '1' ? carrier === value : carrier2 === value}
              onChange={optionNum === '1' ? onChangedCarrier : onChangedCarrier2}
            />{value}</label>
        </form>
      ))}</div>
    );
  }

  const phoneModelOptions = (data, round, selCarrier, optionNum) => {
    const testDataObject = data[round];
    const phoneModel_list = Object.keys(testDataObject[selCarrier]);
    return (
      <div key={`Radio-col-child-2-${optionNum}`} className='Radio-col-child-2'>Phone Models:{phoneModel_list.map(value => (
        <form key={`${value}-${optionNum}`}>
          <label>
            <input
              type="radio"
              name={`Radio-Phone-${optionNum}`}
              value={value}
              checked={optionNum === '1' ? phone_model === value : phone_model2 === value}
              onChange={optionNum === '1' ? onChangedPhoneModel : onChangedPhoneModel2}
            />{value}</label>
        </form>
      ))}</div>
    );
  }

  const serverOptions = (data, round, selCarrier, selPhoneModel, optionNum) => {
    const testDataObject = data[round];
    const serverList = Object.keys(testDataObject[selCarrier][selPhoneModel]);
    serverList.pop(); //get rid of total tests field
    return (
      <div key={`Radio-col-child-3-${optionNum}`} className='Radio-col-child-3'>Server Tests:{
        serverList.reduce(function (result, value) {
          if (value[value.length - 1] === '1') {
            result.push(<form key={`${value}-${optionNum}`}>
              <label>
                <input
                  type="radio"
                  name={`Radio-Server-${optionNum}`}
                  value={value}
                  checked={optionNum === '1' ? server === value : server2 === value}
                  onChange={optionNum === '1' ? onChangedServer : onChangedServer2}
                />{value}</label>
            </form>);
          }
          return result;
        }, [])}</div>
    );
  }

  const createButton = (data, round, selCarrier, selPhoneModel, selServer, optionNum) => {
    var buttonData = {};
    var descriptionSpeeds;
    var descriptionErrors;
    buttonData.route = "/graph";
    buttonData.data = data;
    buttonData.metadata = {};
    buttonData.metadata.rounds = round;
    buttonData.metadata.carrier = selCarrier;
    buttonData.metadata.phone_model = selPhoneModel;
    buttonData.metadata.server = selServer;
    buttonData.metadata.optionNum = optionNum;
    buttonData.metadata.tests = "speeds";
    if (optionNum === '1') {
      if (server.includes("up")) {
        descriptionSpeeds = "Upload speeds from ";
        descriptionErrors = "Upload errors from "
      } else {
        descriptionSpeeds = "Download speeds from ";
        descriptionErrors = "Download errors from ";
      }
    } else if (optionNum === '2') {
      if (server.includes("up")) {
        descriptionSpeeds = "Compare upload speeds from ";
        descriptionErrors = "Compare upload errors from "
      } else {
        descriptionSpeeds = "Compare download speeds from ";
        descriptionErrors = "Compare download errors from ";
      }
    }
    if (optionNum === '1') {
      if (server.includes("wTCP")) {
        descriptionSpeeds += "West Server";
        descriptionErrors += "West Server";
      } else {
        descriptionSpeeds += "East Server";
        descriptionErrors += "East Server";
      }
    } else if (optionNum === '2') {
      descriptionSpeeds += "from Graph 1";
      descriptionErrors += "from Graph 1";
    }
    buttonData.metadata.description = descriptionSpeeds;

    var buttonDataErrors = {};
    var metaDataErrors = structuredClone(buttonData.metadata);
    buttonDataErrors.data = data;
    buttonDataErrors.route = "/graph";
    buttonDataErrors.metadata = metaDataErrors;
    buttonDataErrors.metadata.tests = "errors";
    buttonDataErrors.metadata.description = descriptionErrors;

    /* add in data from graph 1 if this is option number 2 */

    return (
      <div key="goto-buttons">
        <OptionItem
          key={`speeds-${selServer}`}
          name={selServer}
          description={descriptionSpeeds}
          data={buttonData}
          choice={"Go To Graph"}>
        </OptionItem>
        <OptionItem
          key={`errors-${selServer}`}
          name={selServer}
          description={descriptionErrors}
          data={buttonDataErrors}
          choice={"Go To Graph"}>
        </OptionItem>
      </div>);
  }

  const option1 = radioOptions(location.state.data, location.state.metadata.rounds, '1');
  const option2 = radioOptions(location.state.data, location.state.metadata.rounds, '2');
  return (
    <div className="App">
      <header className="App-header">
        <h2>California Broadband {location.state.metadata.rounds} Test Options</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div>Graph 1 Options:</div>
        {option1}
        {option2}
      </header>
    </div>
  );
}

export default TestOptions;