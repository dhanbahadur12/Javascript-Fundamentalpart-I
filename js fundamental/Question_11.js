function factorial(int)
    {
      let fact=1;
      for(let i=1;i<=int;i++)
      {
           fact=fact*i;
      }
      return fact;
    }
 function random(){
     return Math.floor(Math.random() * 11);
 }

     var integer=random();
     console.log("The generated random number is "+integer);
     result_factorial=factorial(integer);
     console.log("Factorial of random number is "+result_factorial);