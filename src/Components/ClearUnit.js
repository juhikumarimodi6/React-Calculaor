import React from "react";
import Clear from "./Clear";
import BackSpaceClear from "./BackSpaceClear";
import './Clear.css'

const ClearUnit = ({input,dotCountNum,setInput,setResult,setDotCountNum}) => {

    return (
        <div className="clear">
            <Clear 
                dotCountNum = {dotCountNum}
                setInput = {setInput}
                setResult={setResult}
                setDotCountNum = {setDotCountNum }
            />
            <BackSpaceClear
                input = {input}
                dotCountNum = {dotCountNum}
                setInput = {setInput}
                setDotCountNum = {setDotCountNum }
            />
      </div>
    )
}

export default ClearUnit;