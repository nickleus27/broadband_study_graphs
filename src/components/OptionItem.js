import './OptionItem.css';
import './CustomButton';
import CustomButton from './CustomButton';

function OptionItem(props) {
    return (<div className="expense-item">
        <div>{props.name}</div>
        <div className="expense-item__description">
            <h2>{props.description}</h2>
        </div>
        <div>
            <CustomButton route={props.route} data={props.data} choice={props.choice}></CustomButton>
        </div>
    </div>
    );
}

export default OptionItem;