var myIndexOf = function(containedStr, startInd) {
    var theOne = this;
    var theLen = theOne.length;

    var containedStrLen = containedStr.length;

    console.log('containedStrLen:', containedStrLen);
    if(containedStr === '') { // 特殊处理
        if(startInd > theLen) {
            return theLen;
        } else if(startInd < 0) {
            return 0;
        } else {
            return startInd || 0;
        }
    }

    if(containedStrLen > theLen) {
        return -1;
    }
    var theIndex = -1;
    for(var ind = startInd || 0; ind + containedStrLen <= theLen ; ind++) {
        if(theOne.slice(ind, ind + containedStrLen) === containedStr) {
            theIndex = ind;
            break;
        }
    }
    return theIndex;
}
