const vowels = ["a", "e", "i", "o", "u"];
      function Vowelfunc(string) {
        let count = 0;
        for (let char of string) {
          if (vowels.includes(char)) {
            count++;
          }
        }
        return count;
      }

      const string = "engineering college";
      const TotalCount = Vowelfunc(string);
      console.log( " The number of vowels in string="+TotalCount );