const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return drivers = ['Antonia', 'Nuru'];
}

function returnLastTwoDrivers(drivers){
    return drivers = ['Amari', 'Mo'];
}

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function(){
        return fare ** 2;
    }
}

function fareDoubler(fare){
    const cb = createFareMultiplier(fare)();
    return fare * 2;
}

function fareTripler(fare){
    const cb = createFareMultiplier(fare)();
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
}

