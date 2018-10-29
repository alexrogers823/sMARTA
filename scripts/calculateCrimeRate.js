function calculateCrime(station) {
  const rate = station["Total Crimes"];
  if (rate < 1000) {
    return "Low";
  } else if (rate < 2500) {
    return "Medium";
  } else {
    return "High";
  }
}
