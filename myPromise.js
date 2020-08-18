var myPromise = function() {
    var args = [...arguments]
    var func = args[0]

    this.state = 'ready';
    this.msg = 'undo';

    var _this = this
    var resolveFunc = function() {
        var args = arguments[0];
        _this.state = 'resolve';
        _this.msg = args
    }

    var rejectFunc = function() {
        var args = arguments[0]
        _this.state = 'reject';
        _this.msg = args
    }

    func(resolveFunc, rejectFunc)

    arguments.callee.prototype.then = function() {
        var thenFunc = Array.from(arguments)[0]
        if(!thenFunc) {
            return
        }
        if(_this.state === 'ready') {
            setTimeout(()=>{
                arguments.callee.apply(this, arguments)
            }, 50) // 每50ms执行一次
        } else if(_this.state === 'reject') {
            return // donothing
        } else {
            thenFunc(_this.msg)
        }
    }

    arguments.callee.prototype.reject = function() {
        var thenFunc = Array.from(arguments)[1]
        if(!thenFunc) {
            return
        }
        if(_this.state === 'ready') {
            setTimeout(()=>{
                arguments.callee.apply(this, arguments)
            }, 50)
        } else if(_this.state === 'ready') {
            return // donothing
        } else {
            thenFunc(_this.msg)
        }
    }
    return this;
}
