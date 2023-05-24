const IsOperator = (val) => {
    return !(!isNaN(val[1]) || val[1] === '=' || val[1] === '.')
}

export default IsOperator;