var x=function(string)
    {
      if(string.length<3)
      {
        return string.toUpperCase();
      }
      first=(string.substring(0,3)).toLowerCase();
      last=string.substring(3,string.length);
      return first+last;
    }
    var string=prompt("enter the string");
    result=x(string);
    console.log("Final string="+result);