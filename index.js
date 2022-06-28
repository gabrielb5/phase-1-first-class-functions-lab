// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// function returnFirstTwoDrivers() {
   //  const newDrivers = drivers.splice(2,2);
   // return newDrivers;
//}

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };


function returnLastTwoDrivers (drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createfFreMultiplier(multiplier) {
    let fare;
    return fare * multiplier;
  }



