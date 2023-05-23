import React from "react";
import Button from "./Button";
import './Rows.css'

const rows = [[7,8,9,'/'], [4,5,6,'*'], [1,2,3,'+'], ['.',0,'=','-']];
const Rows = ({input, dotCountNum, setInput, setResult, setDotCountNum}) => {
    return(
        <div>
            {rows.map(row => {
                return (
                    <div className="row">
                        {row.map((num) => <Button 
                                            input = {input} 
                                            dotCountNum = {dotCountNum}
                                            setInput = {setInput} 
                                            setResult = {setResult}
                                            setDotCountNum = {setDotCountNum }
                                            > {num} </Button>)}
                    </div>
                )
            })}
        </div>
    )
}

export default Rows;