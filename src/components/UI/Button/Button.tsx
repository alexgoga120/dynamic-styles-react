import './Button.css';
import ButtonProps from "./ButtonProps";

const Button = (props:ButtonProps) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
