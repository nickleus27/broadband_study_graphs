import '../App.css';
//import '../components/OptionItem.css';
//import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getCarrierModelServerGraph } from '../library/dataToGraph';
import CustomTooltip from '../components/CustomToolTip';

/**
 * 
 * TODO: The graph still needs work. This is just a ruff draft
 */

function Graph() {
    const location = useLocation();
    const tests = location.state.data;
    var data = getCarrierModelServerGraph(tests);
    return (
        <div className="App">
            <header className="App-header">
                <h2>Graph For {location.state.title}</h2>
                <BarChart width={1300} height={700} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </header>
        </div>
    );

}

export default Graph;