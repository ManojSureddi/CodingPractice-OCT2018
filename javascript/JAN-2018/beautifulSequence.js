function isBeautiful(str, len){
    if(len > str.length-len){
        return "NO";
    }
    let cutLength = len >= 16 ? 8 : 0;
    let subSt = str.substring(0 + cutLength,len),  cutString = str.substring(0 ,cutLength);
    
    console.log(parseInt(subSt))
    let initial = Number(subSt), next = initial + 1,i=len, nlength = (next+"").length + cutLength;

    for(i=len;i<= str.length -  nlength;i++){
        let temp = parseInt(str.substring(i+cutLength,i+cutLength+nlength));
        if(next === temp){
           next = temp + 1;
           i = i+ nlength-1;
           nlength = (next+"").length
          // continue;
        }else{
            return isBeautiful(str,len+1);
        }
    }

    return "Yes " + cutString +initial
}