// Code your solution in this file
function findMatching(drivers,name){
  const matchingDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase(); });
 
 return matchingDrivers;
}

function fuzzyMatch(){
  
}