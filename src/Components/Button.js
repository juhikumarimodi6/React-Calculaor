import React from "react";
import Evaluate from "./Evaluate";
import './Button.css';

var dotCount = 0;

const Button = (props) => {
    const {input, setResult, setInput} = props;
    var value = props.children;

    
    //to change the colour of box
    const isNotOperator = (val) => {
        return !isNaN(val[1]) || val[1] === '=' || val[1] === '.'
    }

    //forming a string of inputs
    const handleButtonClick = (event) => {
        let val = event.target.textContent[1];
        
        if(val === "+" || val === '-' || val === '/' || val === '*' || val === '=') {
            dotCount = 0;
        }
        if(val === '.') {
            dotCount++;
            console.log(dotCount)
            let value = dotCount > 1 ? "" : ".";
            setInput(prevInput => prevInput + value);
        } else {
            setInput(prevInput => prevInput + val);
        }
    }

    //if equal symbol button is pressed it evaluates
    const handleEvaluate = () => Evaluate(input, dotCount, setResult)

    //To check if its equal or not and accordingly which event to handle
    const handleEvent = (val) => {
        return  val[1] === '=' ? handleEvaluate: handleButtonClick
    }

    return (
        <button 
            className={isNotOperator(value)? "button" : "button operator" } 
            onClick ={handleEvent(value)} 
        >
            {value}
        </button>
    )

}

export default Button;