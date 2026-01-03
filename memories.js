const train = document.getElementById("train");
const rail = document.querySelector(".rail");

let direction = 1;
let position = 0;

function moveTrain() {
  const max = rail.offsetHeight - 50;

  position += direction * 1;

  if (position >= max || position <= 0) {
    direction *= -1;
  }

  train.style.transform = `translateY(${position}px)`;
  requestAnimationFrame(moveTrain);
}

moveTrain();
