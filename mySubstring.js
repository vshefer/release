function mySubstring(inputStart, inputEnd) {
    // undo 参数类型校验

    var theOne = this;
    var theLen = theOne.length;

    var start = (inputStart < 0 || isNaN(inputStart)) ? 0 : inputStart;
    var end;

    if(inputEnd === undefined) {
        end = theLen;
    } else if(inputEnd < 0 || isNaN(inputEnd)) {
        end = 0;
    } else if(inputEnd > theLen) {
        end = theLen;
    } else {
        end = inputEnd;
    }

    if(start > end) {
        [start, end] = [end, start];
    }
    
    var outputStr = '';    
    for(var index = start; index < end; index++) {
        outputStr += theOne[index]
    }
    return outputStr;
}
