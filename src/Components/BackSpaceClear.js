import React from "react";
import './Clear.css'

const BackSpaceClear = ({input,dotCountNum,setInput,setDotCountNum}) => {

    const handleBackspace = () => {
        if(input[input.length - 1] === '.') {
            setDotCountNum(0)
            // console.log("backspace" + dotCountNum)
            // console.log("input" + input)
        }
        setInput(prevInput => prevInput.slice(0, prevInput.length-1))
        // console.log("backspace" + dotCountNum)
    }

    return (
        <button  className="clear-content" onClick={handleBackspace}>
            CE
        </button >
    )
}

export default BackSpaceClear;