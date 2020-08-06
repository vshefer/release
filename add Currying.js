function add() {
    var args = [...arguments]

    var _addr = function() {
        args.push(...arguments)
        arguments.callee.toString = function() {return args.reduce((a,b) => a + b)}
        return arguments.callee
    }
    return _addr
}
