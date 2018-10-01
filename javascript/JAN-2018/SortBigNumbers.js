function bigNumbersorting(arr){
    return arr.sort((a,b)=>{
        let n1= a.length,
        n2 = b.length;
        if(n1<n2){
            return -1
        }else if(n1>n2){
            return 1
        }
        
        for(let i =0; i<n1;i++){
            console.log(a[i], b[i]);
            if(a[i] < b[i]){
                return -1;
            }else if(a[i] > b[i]){
                return 1
            }
        }
        return 0;
    })
}