let func = (string) => {
    let combination=[];
    let str=string.length;
    for(let i=0; i<str;i++)
    {
      for(let j=i+1; j<str+1; j++)
      {
        combination.push(string.slice(i,j));
      }
    }
    return combination;

   }

   console.log(func('dog'));