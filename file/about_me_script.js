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

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");

  window.addEventListener("scroll", function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footer.style.opacity = "1";
      footer.style.visibility = "visible";
    } else {
      footer.style.opacity = "0";
      footer.style.visibility = "hidden";
    }
  });
});

function typeWriterEffect(element, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      resolve();
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lines = [
    document.getElementById('line1'),
    document.getElementById('line2'),
    document.getElementById('line3'),
    document.getElementById('line4'),
    document.getElementById('line5'),
    document.getElementById('line6'),
    document.getElementById('line7')
  ].filter(line => line !== null);

  lines.forEach(line => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(10px)';
    line.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
  });

  async function animateText() {
    let delay = 500;
    for (let line of lines) {
      await typeWriterEffect(line, delay);
      delay += 500;
    }
  }

  animateText();
});

const textElement = document.getElementById("animatedText");

function restartAnimation() {
  if (textElement) {
    textElement.style.transition = "none";
    textElement.style.strokeDashoffset = "0";

    setTimeout(() => {
      textElement.style.transition = "stroke-dashoffset 3s ease";
      textElement.style.strokeDashoffset = "1000";
    }, 50);
  }
}

restartAnimation();
setInterval(restartAnimation, 10000);

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  if (window.innerWidth <= 768) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      hamburger.classList.add('hide-hamburger');
    } else {
      hamburger.classList.remove('hide-hamburger');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
});
