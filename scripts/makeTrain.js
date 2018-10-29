function canMakeTrain(station) {
  let isNext, waitingTime;
  const realisticTrains = martaAPI.filter(train => {
    const limit = 60;
    const seconds = parseInt(train.WAITING_SECONDS);
    return seconds > limit;
  }

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
