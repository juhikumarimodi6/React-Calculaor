import React from "react";
import './Clear.css'

const BackSpaceClear = ({setInput}) => {

    const handleBackspace = () => {
        setInput(prevInput => prevInput.slice(0, prevInput.length-1))
    }

    return (
        <button  className="clear-content" onClick={handleBackspace}>
            Backspace
        </button >
    )
}

export default BackSpaceClear;