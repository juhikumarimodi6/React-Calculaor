import React from "react";
import './Clear.css'

const Clear = ({setInput, setResult, setDotCountNum}) => {

    //Clear the display screen
    const handleClear = () => {
        setInput("")
        setResult("")
        setDotCountNum(0)
    }

    return (
            <button className="clear-content" onClick={handleClear}>
                Clear
            </button >
    )
}

export default Clear;