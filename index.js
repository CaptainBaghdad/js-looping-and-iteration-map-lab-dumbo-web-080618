// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(ele){
    return ele.toLowerCase();
    
  });

  
}

function nameToAttributes(drivers){
  
  return drivers.map(function(ele){
    
   console.log({'firstName': ele.split(' ')[0], 'lastName': ele.split(' ')[1]})
   
    
  });
  
  
  
}
