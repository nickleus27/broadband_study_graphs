import '../App.css';
//import '../components/OptionItem.css';
//import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
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
                <div style={{ width: '100%', height: 750 }}>
                    <ResponsiveContainer width="95%" height="80%">
                        <BarChart data={data} margin={{
                            top: 11,
                            right: 0,
                            left: 21,
                            bottom: 32,
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