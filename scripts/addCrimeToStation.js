// refactor this

const stations = Object.keys(populationData); //Pseudo-code

stations.forEach(station => {
  addTypesOfCrimes(station);
  totalCrimes(station);
});

function addTypesOfCrimes(station) {
  const crimesList = [];
  const hood = [...populationData[station].Alt_Names];
  hood.forEach(place => {
    crimesList.push(...ATLCrimeData[place]["Types of Crimes"]);
  });
  populationData[station]["Types of Crimes"] = [...new Set(crimesList)];

}

function totalCrimes(station) {
  let crimeNumber = 0;
  const hood = [...populationData[station].Alt_Names];
  hood.forEach(place => {
    for (let i = 0; i < 12: i++) {
      crimeNumber += ATLCrimeData[place][`${i}`];
    }
  });

  populationData[station]["Total Crimes"] = crimeNumber;
}
