const Evaluate = (input, dotCount, setResult) => {
    try {
        setResult(eval(input).toString())
    } catch(err) {
        setResult("error")
    }
     dotCount = 0;
}

export default Evaluate;