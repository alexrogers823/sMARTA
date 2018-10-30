const stationObject = {};
// edit 'marta' variable later
const marta = [...martaAPI];

// setting 45 seconds as our cutoff value
function realisticTimes(values) {
    return values > 45;
}

marta.forEach(train => {
    if (!stationObject[train.STATION]) {
        stationObject[train.STATION] = [];
    }
    stationObject[train.STATION].push(train.WAITING_SECONDS);
    stationObject[train.STATION].filter(realisticTimes);
});

// this is when the user will input the station they are going to
// e.g. stationObject['KING MEMORIAL STATION'][0] will pick the lowest WAITING_SECONDS value, i.e. the fastest train available





