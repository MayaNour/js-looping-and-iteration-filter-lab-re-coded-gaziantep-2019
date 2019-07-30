// Code your solution in this file
function findMatching(drivers,name){
  const matchingDrivers = drivers.filter(function (driver) {
    return driver.toLowercase() === name; });
 
 return matchingDrivers;
}