function MartaTotalTime(currentLocation, destination) {
    let totalTime = 0
    let addTime  = 2
    const paring = {
        "N":"S",
        "S":"N",
        "W":"E",
        "E":"W"
    }
    const currNumber = parseInt(currentLocation[currentLocation.length-1]);
    const destinationNum = parseInt(destination[destination.length-1]);
    if (currentLocation[0] === destination[0]) {
        totalTime = Math.abs((currNumber - destinationNum)) * addTime
    }else if (paring[currentLocation[0]] !== destination[0] && destination !== "5P") {
        totalTime += currNumber * addTime;
        totalTime += 10;
        totalTime += destinationNum * addTime;
    }else {
        totalTime += currNumber * addTime;
        totalTime += destinationNum * addTime; 
    }

    return totalTime


    
}