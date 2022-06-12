// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2)

const returnLastTwoDrivers = (arr) => arr.slice(arr.length-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (mult) => ((fare) => fare * mult)

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);


function selectDifferentDrivers(arr, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arr)
    }else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(arr)
    }
}