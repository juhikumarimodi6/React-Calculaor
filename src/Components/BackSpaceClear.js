import React from "react";
import './Clear.css'

const BackSpaceClear = ({input, setInput, setDotCountNum}) => {

    const handleBackspace = () => {
        if(input[input.length - 1] === '.') {
            setDotCountNum(0)
        }
        setInput(prevInput => prevInput.slice(0, prevInput.length-1))
    }

    return (
        <button  className="clear-content" onClick={handleBackspace}>
            Backspace
        </button >
    )
}

export default BackSpaceClear;