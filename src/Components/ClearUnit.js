import React from "react";
import Clear from "./Clear";
import BackSpaceClear from "./BackSpaceClear";
import './Clear.css'

const ClearUnit = ({input, setInput,setResult,setDotCountNum}) => {

    return (
        <div className="clear">
            <Clear 
                setInput = {setInput}
                setResult={setResult}
                setDotCountNum = {setDotCountNum }
            />
            <BackSpaceClear 
                input = {input} 
                setInput = {setInput} 
                setDotCountNum = {setDotCountNum }
            />
      </div>
    )
}

export default ClearUnit;