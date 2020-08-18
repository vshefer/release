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
        var args = [...arguments]
        var resolveFunc = args[0]
        var rejectFunc = args[1]
        if(!resolveFunc) {
            return
        }
        var res
        if(_this.state === 'ready') {
            setTimeout(()=>{
                arguments.callee.apply(this, arguments)
            }, 50) // 每50ms执行一次
        } else if(_this.state === 'reject') {
            res = rejectFunc(_this.msg)
        } else {
            res = resolveFunc(_this.msg)
        }
        return res 
        // todo
        new myPromise(resolve => {
        setTimeout(() => {
            resolve('hello')
            }, 2000)
        }).then(val => {
            console.log(val) //  参数val = 'hello'
            return new Promise(resolve => {
            setTimeout(() => {
                resolve('world')
            }, 2000)
            })
        }).then(val => {
            console.log(val) // 参数val = 'world'
        })
    }

    return this;
}
