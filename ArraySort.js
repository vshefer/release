Array.prototype.mySort = function() {
    var args = Array.from(arguments);
    var arr = this;
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < len - i - 1; j++) {
            var func = args[0];
            if(func && typeof func == 'function') {
                if(func.call(args, arr[j], arr[j+1]) > 0){
                  [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                }
            } else {
                var str1 = arr[j].toString()
                var str2 = arr[j+1].toString()
                if(str1 > str2){
                  [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                }
            }
        }
    }
}
