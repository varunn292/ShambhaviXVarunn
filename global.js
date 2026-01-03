/* ===== FLOATING HEARTS ===== */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = Math.random() > 0.5 ? "❤️" : "🖤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 5 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);

/* ===== PAGE FADE TRANSITION ===== */
function goToPage(url) {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
}
