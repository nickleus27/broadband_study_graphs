import '../App.css';
import '../components/OptionItem.css';
//import OptionItem from '../components/OptionItem.js';
import { useLocation } from 'react-router-dom';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
import {getCarrierModelServerGraph} from '../library/dataToGraph';

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
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </header>
        </div>
    );

}

export default Graph;