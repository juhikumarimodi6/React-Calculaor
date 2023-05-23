import React from "react";
import Clear from "./Clear";
import BackSpaceClear from "./BackSpaceClear";
import './Clear.css'

const ClearUnit = ({setInput,setResult,setDotCountNum}) => {

    return (
        <div className="clear">
            <Clear 
                setInput = {setInput}
                setResult={setResult}
                setDotCountNum = {setDotCountNum }
            />
            <BackSpaceClear setInput = {setInput} />
      </div>
    )
}

export default ClearUnit;