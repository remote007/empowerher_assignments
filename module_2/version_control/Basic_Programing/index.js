function checkPrime(num){
   for(let i = 2 ; i < Math.sqrt(num);i++)
       if(num%i==0)
          return(true);
   return(false);
}
console.log(checkPrime(27));
console.log(checkPrime(53));
