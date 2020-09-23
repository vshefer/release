// function () {
//   return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
// }
var myTrim = function() {
    function isSpace(c) {
        if(!c || c === undefined || c === null || !c.length || c === ' ') {
            return true;
        }
    }

    var theOne = this;
    var theOneLen = theOne.length;

    if(!theOne || (isSpace(theOne[0]) && isSpace(theOne[theOneLen - 1]))) {
        return theOne; // 如果是空字符串则直接返回自身 || 如果字符串开头末尾都没空格符则直接返回自身
    }

    var preIndex = 0;
    var lastIndex = theOneLen - 1;

    while(preIndex < theOneLen) {
        if(isSpace(theOne[preIndex])) {
            preIndex++;
        } else {
            break;
        } // 记录开始空格结尾位置
    }
    while(lastIndex > 0 && lastIndex > preIndex) {
        if(isSpace(theOne[lastIndex])) {
            lastIndex--;
        } else {
            break;
        } // 记录末尾空格开头位置
    }
    var trimStr = theOne.slice(preIndex, lastIndex + 1); // slice不包括最后一位
    return trimStr;
}
