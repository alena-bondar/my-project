import {FC} from "react";

type ButtonProps = {
    name: string;
    buttonType?: "button" | "submit" | "reset";
}
export const Button:FC<ButtonProps> = ({name, buttonType}) => {

    return (
        <div>
        <button type={buttonType}>{name}</button>
        </div>
    )
}