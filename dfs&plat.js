var obj = {};
function* dfsAndPlat(arr) {
    if(!arr || !arr.length) {
    } else {
        console.log('arr:', arr);
        for(item of arr) {
            if(item.key === 42) {
               obj = item;
            }
            yield item.key;
            yield* dfsAndPlat(item.children);
        }
    }
}
