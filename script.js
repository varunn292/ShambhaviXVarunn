const lines = document.querySelectorAll(".line");
const startBtn = document.getElementById("startBtn");

/* ===== TEXT STAGGER ===== */
lines.forEach((line, index) => {
  line.style.animationDelay = `${index * 0.8 + 0.6}s`;
});

/* ===== FLOATING HEARTS ===== */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = Math.random() > 0.5 ? "❤️" : "🖤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 700);

/* ===== PAGE TRANSITION ===== */
startBtn.addEventListener("click", () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "chamak.html";
  }, 1000);
});
