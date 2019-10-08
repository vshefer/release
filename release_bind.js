Function.prototype.bind = function(extend) {
    var originArgs = Array.prototype.slice.call(arguments, 1);
    var _this = this;
    return function() {
        return _this.apply(extend, originArgs.concat(Array.prototype.slice.call(arguments)))
        //绑定this同时将调用时传递的序列和预置序列进行合并
    }
}
