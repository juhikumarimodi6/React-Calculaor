const Evaluate = (input, setResult) => {
    try {
        setResult((Math.round((eval(input) + Number.EPSILON) * 10000) / 10000).toString())
        // setResult((Math.round((Function("return " + input)() + Number.EPSILON) * 10000) / 10000).toString())
    } catch(err) {
        setResult("Error")
    }
}

export default Evaluate;
