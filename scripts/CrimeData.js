const ATLCrimeData = {};
const crimeInfo = CrimeData.data;

for (let i = 1; i < crimeInfo.length; i++) {
    ExtractNeighborhood(crimeInfo[i][5]);
    const month = ExtractMonth(crimeInfo[i][2]);
    addCrimes(crimeInfo[i][5], month, i);
}

function ExtractMonth(date) {
    const dateArr = date.split("/")
    return parseInt(dateArr[0]) - 1

}

function ExtractNeighborhood(neighborhood) {

    if (!ATLCrimeData[neighborhood]) {
        ATLCrimeData[neighborhood] = createMonths();
    }

}

// Creates Months 
function createMonths() {
    const monthObj = {
        "Types of Crimes": []
    }
    for (let i = 0; i < 12; i++) {
        monthObj[`${i}`] = 0;

    }
    return monthObj;
}



function addCrimes(neighborhood, months, i) {
    const crimeName = CrimeData.data[i][0];
    ATLCrimeData[neighborhood][months] += 1;
    if (!ATLCrimeData[neighborhood]["Types of Crimes"].includes(crimeName)) {
        ATLCrimeData[neighborhood]["Types of Crimes"].push(crimeName);
    }
}