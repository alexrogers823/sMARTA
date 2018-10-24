// want to consolidate crime data

// tell the user that in the last month, x number of crimes happened in y area

// sample object to add to populationData object
const crimes = {
  "Lindbergh Station": {
    "Crime_Number": 0,
    "Crime_Types": []
  }
}

// cross reference object with neighborhoods for each station

// Psuedo-code: When running a map/iteration for crime number,
// add 1 to crime_number, or create crime_number

const mapped_crime_data = {
  "Neighborhood": {
    "totalCrimes": "" /*number of crimes for that neighborhood*/
    "typeOfCrime": [],
  }
};

Object.keys(json).forEach(key => {
  crimes[key].Crime_Number = mapped_crime_data["Neighborhood"].totalCrimes;
  crimes[key].Crime_Types.push(...mapped_crime_data["Neighborhood"].typeOfCrime);
  //Take out duplicate values of crime types later
})
