import React from "react";
import InputExpression from "./InputExpression";
import Evaluate from "./Evaluate";
import OperatorCheck from "./OperatorCheck";
import './Button.css';

const Button = (props) => {
    const {input, dotCountNum, setResult, setInput, setDotCountNum} = props;
    const value = props.children;

    //To check if its equal or not and accordingly which event to handle
    const handleEvent = (val) => val[1] === '=' ? handleEvaluate: handleButtonClick
    
    //forming a string of inputs
    const handleButtonClick = (event) => InputExpression(event, input, dotCountNum, setInput, setDotCountNum)

    //if equal symbol button is pressed it evaluates
    const handleEvaluate = () => Evaluate(input, setResult)

    return (
        <button 
            className={OperatorCheck(value[1])? "button operator" : "button" } 
            onClick ={handleEvent(value)} 
        >
            {value}
        </button>
    )

}

export default Button;