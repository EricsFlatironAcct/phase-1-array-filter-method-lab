// Code your solution here
const driverObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  const driverArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(names, reg){
    return names.filter(function(driver){return driver.toLowerCase()===reg.toLowerCase()})
}
console.log(findMatching(driverArray, "Bobby"));

function fuzzyMatch(names, reg){
    return names.filter(function(driver){return driver.toLowerCase().slice(0,reg.length) === reg.toLowerCase()})
}
//console.log(findMatching(driverArray, "Sa"));
function matchName(names, reg){
    return names.filter(function(driver){return driver.name.toLowerCase()=== reg.toLowerCase()})
}