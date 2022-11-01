function allmethod(info){
    return Object.getOwnPropertyNames(info);
  }
  var info={
    name : "Dhan Bahadur BK",
    gender :  "male",
    age : 20,
    address : "Kathmandu"
  };
   
  console.log(allmethod(info));