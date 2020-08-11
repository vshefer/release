var myArr = function() {
    Object.assign(this, [...arguments])

    var args = Array.from(arguments);
    
    var len = args.length;

    this.length = len;

    var theThis = arguments.callee;

//     theThis.prototype.join = () => {
//         return [...this].join(',');
//     }
    
//      Object.assign(theThis.prototype, Array.prototype);
    var funcKey = ['copyWithin', 'entries', 'join']; // TODO
    for(key of funcKey) {
        theThis.prototype[key] = Array.prototype[key].bind(this)
    }
     this[Symbol.iterator] = function* () {
        var index = 0;
        while(index < len) {
         yield args[index++];
        }
//         var index = 0;
//         function next() {
//             return {
//                 value: args[index],
//                 done: index++ === len
//             }
//         }
//         return {
//             next
//         }
     }
}
