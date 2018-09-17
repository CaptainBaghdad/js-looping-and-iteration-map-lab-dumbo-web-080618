// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(ele){
    return ele.toLowerCase();
    
  });

  
}

function nameToAttributes(drivers){
  let arr = [];
  let obj = {};
  for(let i = 0; i < drivers.length;i++){
  arr.push(drivers[i].split(" "));
  
  
  }
  console.log(arr);
  return arr.map(function(ele){
    Object.assign({}, obj);
    obj.firstName = ele[0];
    obj.lastName = ele[1];
    return obj;
   
    
  });
  
  
  
}
