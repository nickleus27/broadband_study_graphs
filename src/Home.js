import './components/OptionItem.css';
import OptionItem from './components/OptionItem.js';

const testRounds = ["Round 14", "Round 15", "Round 16"];

const renderUserButtons = () => {
    return testRounds.map((tests) => (
        <OptionItem name={tests} description={"Broadband testing for the year 2020"}
            choice={"Go TO " + tests}></OptionItem>
    ))
};

function Home() {
    return (
        <div>
            {renderUserButtons()}
        </div>
    );
}

export default Home;