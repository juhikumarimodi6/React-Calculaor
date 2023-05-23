import React from "react";
import './Clear.css'

const Clear = ({setInput,setResult}) => {

    //Clear the display screen
    const handleClear = (event) => {
        setInput("")
        setResult("")
    }

    const handleBackspace = () => {
        setInput(prevInput => prevInput.slice(0, prevInput.length-1))
    }
 
    return (
        <div className="clear">
            <button className="clear-content" onClick={handleClear}>
                Clear
            </button >
            <button  className="clear-content" onClick={handleBackspace}>
                CE
            </button >
      </div>
    )
}

export default Clear;