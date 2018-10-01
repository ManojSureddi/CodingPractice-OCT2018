function convertToAlternatinfCharacters(str){
    let converted = [str[0]],
     count =0,
     n = str.length;
    
    for(let i = 1; i<n;i++){
        if(str[i]!== converted[count]){
            converted.push(str[i]);
            count++;
        }
    }
    console.log(converted.join(""));
}