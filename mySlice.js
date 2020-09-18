    var theOne = arguments.callee;
    var theOneLen = this.length || 0;
    var args = Array.from(arguments);

    var start = args[0];
    var end = args[1] || theOneLen;
    
    var theRealStart,theRealEnd;

    switch(start >= 0) {
        case true:
            theRealStart = start;
            break;
        case false:
            theRealStart = theOneLen + start;
            break;
    }
    
    switch(end >= 0) {
        case true:
            theRealEnd = end;
            break;
        case false:
            theRealEnd = theOneLen + end;
            break;
    }

    console.log('theRealStart:', theRealStart);
    console.log('theRealEnd:', theRealEnd);

    var sliceStr = '';
    for(var ind = theRealStart; ind < theRealEnd; ind++){
        sliceStr += this[ind];
    }
    return sliceStr;
