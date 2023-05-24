import OperatorCheck from "./OperatorCheck";

const InputExpression = (event, input, dotCountNum, setInput, setDotCountNum) => {
    let val = event.target.textContent[1];

    if(OperatorCheck(val) || val === '=') {
        setDotCountNum(0)
    }

    if(OperatorCheck(val) && OperatorCheck(input[input.length - 1])) {
        setInput(prevInput => prevInput.slice(0, prevInput.length - 1) + val);
    } else {
        if(val === '.') {
            setDotCountNum(prevCount =>  prevCount + 1)
            let value = dotCountNum > 0 ? "" : ".";
            setInput(prevInput => prevInput + value);
        } else {
            setInput(prevInput => prevInput + val);
        }
    }
}

export default InputExpression;