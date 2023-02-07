import {MouseEventHandler} from "react";

interface ButtonProps extends Props {
    type: "button" | "submit" | "reset",
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default ButtonProps;