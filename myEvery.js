function myEvery() {
    var theOne = this;
    var args = Array.from(arguments);

    var func = args[0];
    var theThis = args[1] || window;

    var theLen = theOne.length;

    var isPass = true;
    for(var index = 0; index < theLen; index++) {
        var theCItem = theOne[index];

        var result = func.call(theThis, theCItem, index, theOne);
        if(!result) {
            isPass = false;
            break;
        }
    }
    return isPass;
}
