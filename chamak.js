const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");

let yesCount = 0;

/* NO BUTTON ESCAPES */
function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("click", moveNo);

/* YES LOGIC */
yesBtn.addEventListener("click", () => {
  yesCount++;

  if (yesCount === 1) {
    // First YES → tease
    hint.classList.add("show");
    yesBtn.classList.add("shake");

    setTimeout(() => {
      yesBtn.classList.remove("shake");
    }, 400);

  } else {
    // Second YES → go next
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "yes.html";
    }, 1000);
  }
});
