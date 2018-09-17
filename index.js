// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(ele){
    return ele.toLowerCase();
    
  });

  
}

function nameToAttributes(drivers){
  let arr = [];
  var obj = {};
  for(let i = 0; i < drivers.length;i++){
  arr.push(drivers[i].split(" "));
  
  
  }
  //console.log(arr);
  return arr.map(function(ele){
    
   console.log({'firstName': ele.split(' ')[0], 'lastName': ele.split(' ')[1]});
   
    
  });
  
  
  
}
