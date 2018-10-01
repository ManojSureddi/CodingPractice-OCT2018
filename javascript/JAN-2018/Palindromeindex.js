function findPallindromeIndex(str){
    console.log("as");
    let idex = -1,
    n = str.length;
          console.log(idex,n)

    for(let i=0; i<n/2; i++){
          if(str[i]!== str[n-i]){
              if(idex !== -1){
                    return -1
              }else{
                   idex = n-i;
              }
                
  
          }
    }
    console.log(idex)
    return idex;
}