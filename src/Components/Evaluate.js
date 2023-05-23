const Evaluate = (input, setResult) => {
    try {
        setResult(eval(input).toFixed(6).toString())
    } catch(err) {
        setResult("error")
    }
}

export default Evaluate;
