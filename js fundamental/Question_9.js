let longestword=(string)=>{
    let string_split=string.split(" ");
    let longest=0;
    let longest_word=null;
    for(let i=0;i<string_split.length;i++)
    {
      if(longest<string_split[i].length)
      {
        longest=string_split[i].length;
        longest_word=string_split[i];
      }
    }
    return longest_word;
   }

   var string=prompt("enter the string to find the longest word within the string:");
   result=longestword(string);
   console.log("entered string is "+string);
   console.log("The longest word within the entered string is "+result);