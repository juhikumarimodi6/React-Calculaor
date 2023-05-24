const OperatorCheck = (val) => {
    return !(!isNaN(val) || val === '=' || val === '.')
}

export default OperatorCheck;