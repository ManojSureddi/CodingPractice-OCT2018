function matchingNextDigit(str){
    let count =0,
     n = str.length;
    
    for(let i = 0; i<n-1;i++){
        if(str[i]=== str[i+1]){
            count+= parseInt(str[i]);
        }
    }
    console.log(count);
}

function second_matchNextDigitHAlfWayAround(str){
    let count =0,
     n = str.length/2;
     for(let i=0;i<n;i++){
         if(str[i] === str[i+n]){
             count+=parseInt(str[i]);
         }
     }
     console.log(count*2);
}

function third_differenceBetweenSmallestAndLargest(){
    let value = 0;
    return (str)=>{
        let p = str.split(" "),
        max = parseInt(p[0]),
        min = parseInt(p[0]);
        console.log(p);
        for(let i=1; i<p.length; i++){
            let n = parseInt(p[i].trim());
            if( n > max){
                max = n;
            }
            if(n<min){
                min = n;
            }
        }
        value += max-min;
        console.log(value);
    }

}
