function Anagrams(str){
    if(str.length()%2!=0){
        return -1
    }
    let len = str.length;
    let f = str.substring(0,len/2)
    let e = str.substring(len/2)
    let count =0;
    for(let i=0; i<str.length/2; i++){
        if(f[i] !== e[i]){
            count++
        } 
    }  
}