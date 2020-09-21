var myRepeat = function(count) {
    var realCount = parseInt(count);
    if(Number.isNaN(realCount) || !realCount) {
        if(!Number.isFinite(count)) {
            throw new RangeError('Invalid count value');
        }
        return '';
    }
    if(realCount < 0) {
        throw new RangeError('Invalid count value');
    }
    var theOne = this;
    var containStr = '';
    for(var index = 0; index < realCount; index++) {
        containStr += theOne;
    }

    return containStr;
}
