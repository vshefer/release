function myMap() {
    var args = Array.from(arguments);
//     var funcBase = arguments.callee;
    var func = args[0];
    var funcThis = args[1];
    var theOne = this;

    var len = this.length;
    var callBackArr = []
    for(var i = 0; i < len; i++) {
        var currentValue = theOne[i];
        var index = i;
        var callBack = func.call(funcThis, currentValue, index, theOne);
        callBackArr.push(callBack);
    }

    return callBackArr;
}
