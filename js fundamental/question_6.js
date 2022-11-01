function rev_num(num){
    let rem, n, rev=0;
    n=num;
    while(n>0)
    {
      rem=n%10;
      n=parseInt(n/10);
      rev=rev*10+rem;
    }
    return rev;
   }

   const num=100234;
   const revs=rev_num(num);
   console.log("reverse of "+num+" is "+revs);