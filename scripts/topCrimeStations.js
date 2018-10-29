function topCrimeStations() {
  const topStations = [];
  const keys = Object.keys(populationData);
  const values = Object.values(populationData);
  keys.forEach((key, i) => {
    topStations.push([key, values[i]["Total Crimes"]]);
  });
  console.log(topStations);
  const sorted = topStations.slice().sort((a, b) => b[1] - a[1]);
  console.log(sorted);
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
