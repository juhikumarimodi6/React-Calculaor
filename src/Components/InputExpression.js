const InputExpression = (event, dotCountNum, setInput, setDotCountNum) => {
    let val = event.target.textContent[1];
        
    if(val === "+" || val === '-' || val === '/' || val === '*' || val === '=') {
        setDotCountNum(0)
    }
    if(val === '.') {
        setDotCountNum(prevCount =>  prevCount + 1)
        let value = dotCountNum > 0 ? "" : ".";
        setInput(prevInput => prevInput + value);
    } else {
        setInput(prevInput => prevInput + val);
    }
}

export default InputExpression;