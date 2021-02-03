function qucikSort(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('参数格式错误');
    };

    function exchange(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for(var i = 0, len = arr.length; i < len; i++) {
        var min = arr[i];
        var index = i;

        for(var j = i + 1; j < len; j++) {
            if(min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }

        exchange(arr, i , index);
    }
    return arr;
}
