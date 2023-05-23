import React from "react";
import ClearUnit from "./Components/ClearUnit";
import Display from "./Components/Display";
import Rows from "./Components/Rows";
import './App.css'

function App() {
  const [input, setInput] = React.useState("")
  const [result, setResult] = React.useState("")
  const [dotCountNum, setDotCountNum] = React.useState(4)

  return (
    <div className="app-container">
      <Display 
        input = {input} 
        result = {result}
      />
      <ClearUnit
        input = {input} 
        setInput = {setInput} 
        setResult={setResult} 
        dotCountNum = {dotCountNum}
        setDotCountNum = {setDotCountNum}
      />
      <Rows 
        input = {input} 
        setInput = {setInput} 
        setResult={setResult} 
        dotCountNum = {dotCountNum}
        setDotCountNum = {setDotCountNum}
      />
    </div>
  );
}

export default App;
