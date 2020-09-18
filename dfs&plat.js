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
// var obj1 = [{
//     key: 1,
//     children: [{
//         key: 3,
//         children: [{key: 31}]
//     },{
//         key: 4,
//         children: [{key: 41}, {key: 42, name: 'k'}]
//     }]
// }, {
//     key: 5,
//     children: []
// }]
// var arr = [...dfs(obj1)]
