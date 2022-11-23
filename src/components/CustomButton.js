import './CustomButton.css';

function CustomButton(props) {
  return (
     <div className = "option-choice__button"
     onClick={() => alert("You clicked on the button!")}>{props.choice}</div>
  );
}

export default CustomButton;