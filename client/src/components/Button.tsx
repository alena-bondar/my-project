import {FC} from "react";

type ButtonProps = {
    name: string;
    buttonType?: "button" | "submit" | "reset";
    onClick?: () => void;
}
export const Button:FC<ButtonProps> = ({name, buttonType, onClick}) => {

    return (
        <div>
        <button type={buttonType} onClick={onClick}>{name}</button>
        </div>
    )
}