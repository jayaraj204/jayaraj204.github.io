  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,  // Number of particles
        density: {
          enable: true,
          value_area: 800  // Area covered by particles
        }
      },
      color: {
        value: "#ffffff"  // Particle color
      },
      shape: {
        type: "circle",  // Shape of particles
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,  // Particle opacity
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      },
      size: {
        value: 3,  // Particle size
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 0.1
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,  // Speed of particles falling
        direction: "bottom",  // Falling direction
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        }
      }
    },
    retina_detect: true
  });

  document.querySelector(".scroll-left").addEventListener("click", () => {
    document.querySelector(".projects-container").scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelector(".scroll-right").addEventListener("click", () => {
    document.querySelector(".projects-container").scrollBy({ left: 300, behavior: "smooth" });
});



  function toggleMenu(icon) {
    icon.classList.toggle("open");
    document.querySelector("nav ul").classList.toggle("open");
  }
