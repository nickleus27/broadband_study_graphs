import '../App.css';
import '../components/OptionItem.css';
//import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getSpeedGraph, getSpeedGraph2, getErrorGraph, getErrorGraph2 } from '../library/dataToGraph';
import CustomTooltip from '../components/CustomToolTip';
import CustomTooltip2 from '../components/CustomToolTip2';

function Graph() {
    const location = useLocation();
    const metadata = location.state.metadata;
    const stateData = location.state.data;
    const tests = stateData[metadata.rounds][metadata.carrier][metadata.phone_model][metadata.server];
    var data;
    var renderGraph;
    var renderTitle;
    var metadata2;
    if (metadata.tests === "speeds") {
        if (metadata.optionNum === '1') {
            data = getSpeedGraph(tests);
        } else {
            metadata2 = metadata.graph1;
            const tests2 = stateData[metadata2.rounds][metadata2.carrier][metadata2.phone_model][metadata2.server];
            /* use tests2 as first arg becaust metadata2 actually holds test1 from selection screen */
            data = getSpeedGraph2(tests2, tests);
        }
    } else {
        if (metadata.optionNum === '1') {
            data = getErrorGraph(tests);
        } else {
            metadata2 = metadata.graph1;
            const tests2 = stateData[metadata2.rounds][metadata2.carrier][metadata2.phone_model][metadata2.server];
            /* use tests2 as first arg becaust metadata2 actually holds test1 from selection screen */
            data = getErrorGraph2(tests2, tests);
        }
    }
    const graph1 = () => {
        return (<div style={{ width: '100%', height: 750 }}>
            <ResponsiveContainer width="95%" height="80%">
                <BarChart data={data} margin={{
                    top: 11,
                    right: 0,
                    left: 21,
                    bottom: 11,
                }}>
                    <XAxis dataKey="name" interval={0} angle={0} textAnchor="middle" />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>);
    }
    const graph2 = () => {
        return (<div style={{ width: '100%', height: 750 }}>
            <ResponsiveContainer width="95%" height="80%">
                <BarChart data={data} margin={{
                    top: 11,
                    right: 0,
                    left: 21,
                    bottom: 11,
                }}>
                    <XAxis dataKey="name" interval={0} angle={0} textAnchor="middle" />
                    <YAxis />
                    <Tooltip content={CustomTooltip2} />
                    <Legend />
                    <Bar dataKey="graph1" fill="#8884d8" />
                    <Bar dataKey="graph2" fill="#D4AF37" />
                </BarChart>
            </ResponsiveContainer>
        </div>);
    }
    const header1 = () => {
        return (
            <div>
                <h2>Graph For {metadata.carrier} phone model {metadata.phone_model}</h2>
                <div>{metadata.description}</div>
            </div>
        );
    }
    const header2 = () => {
        return (
            <div>
            <h3>Graph1: {metadata.carrier} phone model {metadata.phone_model}</h3>
            <h3>Graph2: {metadata2.carrier} phone model {metadata2.phone_model}</h3>
            <div>{metadata.description}</div>
        </div>
        )
    }
    if (metadata.optionNum === '1') {
        renderTitle = header1();
        renderGraph = graph1();
    } else if (metadata.optionNum === '2') {
        renderTitle = header2();
        renderGraph = graph2();
    }
    return (
        <div className="App">
            <header className="App-header">
                {renderTitle}
                {renderGraph}
            </header>
        </div>
    );

}

export default Graph;