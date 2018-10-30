
const ATLCrimeData = {};
let stations;
const crimeInfo = CrimeData.data;
let martaAPI;
let populationData;
// let CrimeData;

const APIs = [`https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=${SAM}`,
  './api_examples/populationData.json'];

function fetchData(api) {
  return fetch(api).then(data => data.json());
}

const arrayOfPromises = APIs.map(site => fetchData(site));

// console.log(arrayOfPromises);

// ===== PROMISE CHAIN =====
Promise.all(arrayOfPromises)
  .then(arrayOfResults => {
    martaAPI = arrayOfResults[0];
    populationData = arrayOfResults[1];
    stations = Object.keys(populationData);
    addToDropdown(populationData);
    rearrangeCrimeData();
    addCrimeToStations();
    topCrimeStations();
  });
  // .catch(err => console.log(err));
// .then()
// .then(); //Check this function


// ==== CrimeData rearrange ====
function rearrangeCrimeData() {
  for (let i = 1; i < crimeInfo.length; i++) {
    ExtractNeighborhood(crimeInfo[i][5]);
    let date = crimeInfo[i][2];
    if (date && date.includes("/")) {
      const month = ExtractMonth(crimeInfo[i][2]);
      addCrimes(crimeInfo[i][5], month, i);
    }
    // console.log(stations);
  }
}

function ExtractMonth(date) {
    const dateArr = date.split("/");
    return parseInt(dateArr[0]) - 1;

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

// ===== END =====

// ===== Add crime to station =====

function addCrimeToStations() {
  stations.forEach(station => {
    addTypesOfCrimes(station);
    totalCrimes(station);
  });

}

function addTypesOfCrimes(station) {
  const crimesList = [];
  const hood = [...populationData[station].Alt_Names];

  if (hood.length) {
    hood.forEach(place => {

      if (ATLCrimeData[place]) {
        crimesList.push(...ATLCrimeData[place]["Types of Crimes"]);
      }
    });
  }
  populationData[station]["Types of Crimes"] = [...new Set(crimesList)];

}

function totalCrimes(station) {
  let crimeNumber = 0;
  const hood = [...populationData[station].Alt_Names];
  if (hood.length) {
    hood.forEach(place => {
      if (ATLCrimeData[place]) {
        for (let i = 0; i < 12; i++) {
          crimeNumber += ATLCrimeData[place][`${i}`];
        }
      }
  });
}

  populationData[station]["Total Crimes"] = crimeNumber;
}
// ===== END =====

// ===== Getting top 3 Crime Stations =====
function topCrimeStations() {
  const topStations = [];
  const keys = Object.keys(populationData);
  const values = Object.values(populationData);
  keys.forEach((key, i) => {
    topStations.push([key, values[i]["Total Crimes"]]);
  });
  // console.log(topStations);
  const sorted = topStations.slice().sort((a, b) => b[1] - a[1]);
  // console.log(sorted);
  appendToDivs(sorted[0], sorted[1], sorted[2]);
}

function appendToDivs(first, second, third) {
  const topElements = [first, second, third];
  const crimeDiv = document.querySelector("[data-Top3CrimeStations]");
  topElements.forEach(one => {
    const p = document.createElement("p");
    p.textContent = `${one[0]}: ${one[1]}`;
    crimeDiv.appendChild(p);
  });
}
// ===== END =====

// ===== Calculating crime rate of a specific station =====
function calculateCrime(station) {
  const rate = populationData[station]["Total Crimes"];
  // console.log(rate);
  if (rate < 1000) {
    return "Low";
  } else if (rate < 2500) {
    return "Medium";
  } else {
    return "High";
  }
}

// ===== Check for time constraints =====
function checkForConstraints(totalTime=0) {
  if (constraints && constraints < totalTime) {
    return false;
  }

  return true;
}

// ===== Getting total time for destination =====
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

// ===== Checks if user will make train =====
function canMakeTrain(station) {
  let isNext, waitingTime;
  const realisticTrains = martaAPI.filter(train => {
    const limit = 60;
    const seconds = parseInt(train.WAITING_SECONDS);
    return seconds > limit;
  });

  if (martaAPI[station].WAITING_SECONDS < realisticTrains[station].WAITING_SECONDS) {
    isNext = false;
  } else {
    isNext = true;
  }

  realisticTrains.forEach((train, i) => {
    if (martaAPI[i][`${station.toUpperCase()} STATION`] === train.STATION) {
      waitingTime = parseInt(train.WAITING_SECONDS);
      break;
    }
  });

  return [isNext, waitingTime];
}
