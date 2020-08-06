function add() {
    var args = [...arguments]
    return function() {
        args.push(...arguments)
        arguments.callee.toString = () => {return args.reduce((a, b) => a + b)}
        return arguments.callee
    }()
}
