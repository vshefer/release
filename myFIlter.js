var myFilter = function() {
    var theOne = this;
    var args = Array.from(arguments);
    var filterFunc = args[0];

    var len = theOne.length;
    var theSelected = [];

    for(var index = 0; index < len; index++) {
        var isOk = filterFunc(theOne[index]);
        isOk ? theSelected.push(theOne[index]) : null
    }
    return theSelected;
}
