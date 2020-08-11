var myArr = function() {
    var args = Array.from(arguments);
    
    var len = args.length;
    
    for(var i = 0; i < len; i++) {
        this[i] = args[i];
    }
    
    var theThis = arguments.callee;

    this.length = len;

    theThis.prototype.join = () => {
        return args.join(',');
    }
    

     this[Symbol.iterator] = function () {
//          yield args[index];
//          index++;
        var index = 0;
        var next = () => {
            return {
                value: args[index],
                done: index++ === len
            }
        }
        return {
            next
        }
     }
}
