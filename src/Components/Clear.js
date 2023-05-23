import React from "react";
import './Clear.css'

const Clear = ({dotCountNum,setInput,setResult,setDotCountNum}) => {

    //Clear the display screen
    const handleClear = (event) => {
        setInput("")
        setResult("")
        setDotCountNum(0)
        console.log("clear" + dotCountNum);
    }
    return (
            <button className="clear-content" onClick={handleClear}>
                Clear
            </button >
    )
}

export default Clear;