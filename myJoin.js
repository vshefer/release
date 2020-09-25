function myJoin() {
    var theOne = this;
    var theLen = theOne.length;
    var args = Array.from(arguments);


    if(theLen === 0) {
        return '';
    }

    var splitStr = (args[0] === undefined || args[0] === null) ? ',' : args[0];
    var joinStr = theOne[0];
    for(var index = 1; index < theLen; index++) {
        joinStr += `${splitStr}${theOne[index]}`
    }
    return joinStr;
}
