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
  arr.map(function(ele){
    obj[first_name] = ele[0];
    obj[last_name] = ele[1];
    
  });
  
  
  
}
