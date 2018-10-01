function findGems(arr){
    let map = {};
    for(let i =0; i< arr[0].length; i++){
        map[arr[0][i]] = 1;
    }
    let keys = Object.keys(map);
    keys.forEach((val)=>{
        for(let i = 1;i<arr.length;i++){
            if(arr[i].indexOf(val)!== -1){
                map[val] = map[val]+1;
            }
        }
    })
    let count = 0;
    for(let i in map ){
        if(map[i]===arr.length){
            count ++;
        }
    }
    console.log(count);
}