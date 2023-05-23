const Evaluate = (input, setResult, setDotCountNum) => {
    try {
        setResult(eval(input).toString())
    } catch(err) {
        setResult("error")
    }
    setDotCountNum(0)
}

export default Evaluate;