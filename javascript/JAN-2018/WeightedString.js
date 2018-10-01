function weightedString(str){
    let weight=[], maxWeight = {}, charWeight = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26};
    
    for(i=0;i<str.length;){
        sum = 0;
        let j=1,charCode = charWeight[str[i]];
       
        while(str[i]===str[i+j]){
            sum += charCode
            weight[sum] = true;
            j++;
        }
            sum += charCode
            weight[sum] = true;
        
        i=i+j;
    }
    return weight;
}

function isWeightAvailable(weight, req){
    return weight[req] ? "YES" : "NO";
}