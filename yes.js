// Extra hearts for emotional peak
let burstCount = 0;

const burstInterval = setInterval(() => {
  burstCount++;
  if (burstCount > 6) {
    clearInterval(burstInterval);
  }
}, 400);
