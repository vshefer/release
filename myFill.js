function myFill() {
    var theOne = this;
    var theLen = theOne.length;
    
    var args = Array.from(arguments);
    var fillValue = args[0];
    var args1 = args[1];
    var args2 = args[2];

    var theStart = (args1 && !isNaN(parseInt(args1))) ? args1 > 0 ? args1 : theLen + args1: 0;
    var theEnd = args2 ? isNaN(parseInt(args2)) ? 0 : args2 > 0 ? args2 : theLen + args2 : theLen;

    for(var index = theStart; index < theEnd && index < theLen; index++) {
        theOne[index] = fillValue;
    }
    return theOne;
}
