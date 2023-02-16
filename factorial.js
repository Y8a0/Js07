function factorial(nbr){
    var i; 
   // var nbr;
    var f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
  console.log(factorial(6));


  module.exports = factorial;
