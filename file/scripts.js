function typeWriterEffect(element, duration) {
  return new Promise((resolve) => {
    element.style.animation = `typing ${duration}ms steps(30, end) forwards`;
    setTimeout(resolve, duration);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');

  setTimeout(async () => {
    splash.classList.add('hidden');
    await typeWriterEffect(line1, 3000); 
    await typeWriterEffect(line2, 3000); 
  }, 3200);
});

const textElement = document.getElementById("animatedText");

function restartAnimation() {
  textElement.style.transition = "none";
  textElement.style.strokeDashoffset = "0";

  setTimeout(() => {
    textElement.style.transition = "stroke-dashoffset 3s ease";
    textElement.style.strokeDashoffset = "1000";
  }, 50);
}
restartAnimation();
setInterval(restartAnimation, 10000);

const particlesContainer = document.querySelector('.particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = Math.random() * 4 + 2;
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  particle.style.top = `${Math.random() * window.innerHeight}px`;
  particle.style.setProperty('--x', `${x}px`);
  particle.style.setProperty('--y', `${y}px`);

  particlesContainer.appendChild(particle);
  setTimeout(() => {
    particle.remove();
  }, 5000);
}
setInterval(createParticle, 150);

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    splash.classList.add('hidden');
  }, 3200); 
});
