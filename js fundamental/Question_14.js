var arr=['f','a','l','b','i','y'];
    var vowels=[];
    var consonants=[];
    for(var i=0; i<arr.length; i++)
    {
      func(arr[i]);
    }

    function func(x)
    {
      if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u')
      {vowels.push(x);}
      else if(x=='A' || x=='E' || x=='I' || x=='O' || x=='U')
      {vowels.push(x);}
      else
      {consonants.push(x);}
    
    
    }
    console.log("Given array is=");
    console.log(arr);

    console.log("Vowel array =");
    console.log(vowels);
    console.log("Consonant array =");
    console.log(consonants);
    arr.sort();
    console.log("Array after sorting in an ascending order is=");
    console.log(arr);