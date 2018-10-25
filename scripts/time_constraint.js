// pseudo code:
// if user inputted a time constraint, and that constraint is less than
// the amount of time it takes to get there, display a message that says
// that they wont make it in time

function checkForConstraints() {
  if (constraint && constraint < totalTime) {
    return false;
  }

  return true;
}
