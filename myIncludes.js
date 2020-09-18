var myIncludes = function(containedStr, theIndex) {
    var theOne = this;
    var theLen = theOne.length;

    var containedStrLen = containedStr.length;
    
    if(containedStrLen > theLen) {
        return false;
    }
    
    var isContained = false;
    for(var index = theIndex || 0; index + containedStrLen < theLen; index++) {
        var indexStr = theOne.slice(index, index + containedStrLen)
        if(indexStr === containedStr) {
            isContained = true;
            break;
        }
    }
    return isContained;
}
