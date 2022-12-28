import '../App.css';
import '../components/OptionItem.css';
//import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getSpeedGraph, getErrorGraph } from '../library/dataToGraph';
import CustomTooltip from '../components/CustomToolTip';

function Graph() {
    const location = useLocation();
    const metadata = location.state.metadata;
    const stateData = location.state.data;
    const tests = stateData[metadata.rounds][metadata.carrier][metadata.phone_model][metadata.server];
    var data;
    if (metadata.tests === "speeds") {
        data = getSpeedGraph(tests);
    } else {
        data = getErrorGraph(tests);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>Graph For {metadata.carrier} phone model {metadata.phone_model}</h2>
                <div>{metadata.description}</div>
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
            </header>
        </div>
    );

}

export default Graph;