import React from "react";
import './Display.css'

const Display = ({input, result}) => {

    //display the pressed input onto the screen
    return (
      <div className="display">
        <div>
        {input}
        </div>
        <div>
        {result}
        </div>
      </div>
    )
}

export default Display;