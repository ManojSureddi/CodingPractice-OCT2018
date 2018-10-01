function isPangram(str){
    str = str.toLowerCase();
    let chars =[],count=0;
    for(let i=0;i<str.length;i++){
        let code = str.charCodeAt(i)-97;
        if(!chars[code] && str[i]!==" "){
            chars[code]= code + 1;
            count+=code+1;
        }
        console.log(count);
        if(count === 351){
            return "YES"
        }
    }
    console.log(count)
    return "NO"
}