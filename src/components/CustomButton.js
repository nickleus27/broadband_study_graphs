import { Link } from 'react-router-dom';
import './CustomButton.css';

const CustomButton = (props) => {
  return (
    <nav>
      <Link
        className="option-choice__button"
        to={props.data.route}
        state={{
          title: props.data.title,
          data: props.data.data
        }}>
        {props.choice}
      </Link>
    </nav>
  );
}

export default CustomButton;