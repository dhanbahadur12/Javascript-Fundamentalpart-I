var info={
    name : "Hari",
    gender :  "male",
    age : 15,
    address : "Butwal"
  };
  console.log(info);
  
  const pair = Object.entries(info).map(([key, value]) => ({
    key,
    value
  }));
  
  console.log(pair);