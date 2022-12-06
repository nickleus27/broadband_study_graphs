import '../App.css';
import '../components/OptionItem.css';
import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getCarrierModelServerGraph } from '../library/dataToGraph';
import CustomTooltip from '../components/CustomToolTip';

function createButtons(props) {
    var buttons = [];
    for (const carrier of Object.keys(props.data[props.title.rounds])) {
        let buttonData = {};
        buttonData.route = "/carriers";
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


function Graph() {
    const location = useLocation();
    const title = location.state.title;
    const stateData = location.state.data;
    const tests = stateData[title.rounds][title.carrier][title.phone_model][title.server];
    var data = getCarrierModelServerGraph(tests);
    return (
        <div className="App">
            <header className="App-header">
                <h2>Graph For {title.carrier} phone model {title.phone_model}</h2>
                <div>{title.description}</div>
                <div style={{ width: '100%', height: 750 }}>
                    <ResponsiveContainer width="95%" height="80%">
                        <BarChart data={data} margin={{
                            top: 11,
                            right: 0,
                            left: 21,
                            bottom: 11,
                        }}>
                            <XAxis dataKey="name" interval={0} angle={-11} textAnchor="end" />
                            <YAxis />
                            <Tooltip content={CustomTooltip} />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                Choose another test to compare:
                {createButtons(location.state)}
            </header>
        </div>
    );

}

export default Graph;