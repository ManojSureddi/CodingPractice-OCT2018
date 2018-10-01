function beautifyBinary(str){
    let pos = str.indexOf("010"),
    count = 0;
    while(pos !== -1){
            str = replaceAt(str,pos+2,str[pos+2] === "0" ? "1" : "0");
            pos = str.indexOf("010",pos);
            count ++;
    }
    return str;
}

function replaceAt(str, i, replacer){
    let n = replacer.length;
    return str.substring(0,i)+replacer+str.substring(i+1);
}