var dotCount = 0;
const InputExpression = (event, setInput) => {
    let val = event.target.textContent[1];
        
    if(val === "+" || val === '-' || val === '/' || val === '*' || val === '=') {
        dotCount = 0;
    }
    if(val === '.') {
        dotCount++;
        console.log(dotCount)
        let value = dotCount > 1 ? "" : ".";
        setInput(prevInput => prevInput + value);
    } else {
        setInput(prevInput => prevInput + val);
    }
}

export default InputExpression;