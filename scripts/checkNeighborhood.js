// function that checks for if neighborhood is in ATLCrimeData

function checkForNeighborhood(area) {
  const neighborhoods = Object.keys(ATLCrimeData);
  if (neighborhoods.includes(area)) {
    return true;
  }
  return false;
}

// Ask Sam or Will to put something in output that says
// to the user that we cant determine crime rate based on location
// if this function returns false
