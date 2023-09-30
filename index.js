// Code your solution here
function findMatching(driversArray, driverName){
    return driversArray.filter(function(driver) {return driver.toLowerCase() === driverName.toLowerCase()});
}

function fuzzyMatch(driversArray, fuzzyName){
    return driversArray.filter(function (driver) {return (driver.includes(fuzzyName) && (driver.indexOf(fuzzyName) === 0))})
}

function matchName(driversArray, driverName){
    return driversArray.filter(function(driver) {return driver.name === driverName});
}