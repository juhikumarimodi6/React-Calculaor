import React from "react";
import Clear from "./Components/Clear";
import Display from "./Components/Display";
import Rows from "./Components/Rows";
import './App.css'

function App() {
  const [input, setInput] = React.useState("")
  const [result, setResult] = React.useState("")

  return (
    <div className="app-container">
      <Display 
        input = {input} 
        result = {result}
      />
      <Clear 
        setInput = {setInput} 
        setResult={setResult} 
      />
      <Rows 
        input = {input} 
        setInput = {setInput} 
        setResult={setResult} 
      />
    </div>
  );
}

export default App;
