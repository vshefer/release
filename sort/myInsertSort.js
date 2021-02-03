function insertSort(arr) {
    if(!Array.isArray(arr)) {
        return;
    };

    function remove(arr, i) {
        arr.splice(i, 1);
    }

    function insert(arr, i, item) {
        arr.splice(i, 0, item);
    }

    for(var i = 1, len = arr.length; i < len; i++) {
        var selectItem = arr[i];
        var index = i;

        for(var j = i - 1; j >= 0; j--) {
            if(selectItem < arr[j]) {
                index = j;
            } else {
                break;
            }
        }

        remove(arr, i);
        insert(arr, index, selectItem);
    }
    return arr;
}
