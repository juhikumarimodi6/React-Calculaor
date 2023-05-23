const Evaluate = (input, setResult) => {
    try {
        setResult(eval(input).toString())
    } catch(err) {
        setResult("error")
    }
}

export default Evaluate;