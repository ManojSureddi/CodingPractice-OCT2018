function convertToPallindrome(str){
    let n = Math.floor(str.length),
      l = n/2,
      count = 0;
    for(let i = 0 ; i<l;i++){
        if(str[i] !== str[n-i-1]){
          count+= (str.charCodeAt(n-i-1)-str.charCodeAt(i));
        }
    }
    return count;
  }