function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach((bar, index) => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = '0%';
      
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 400 + (index * 180));
    });
  }
  
  window.addEventListener('load', () => {
    setTimeout(animateProgressBars, 600);
  });
  
  // MOBILE MENU
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isOpen = false;
  
  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = isOpen ? 
      '<i class="fas fa-times"></i>' : 
      '<i class="fas fa-bars"></i>';
  });
  
  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            isOpen = false;
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }
        }
      }
    });
  });
  function scrambleText(el, newText) {
    const chars = "!<>-_XasWExfAQxghPpoelXICOn";
    let iteration = 0;
    const interval = setInterval(() => {
      el.textContent = newText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return newText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= newText.length) clearInterval(interval);
      iteration += 1/3;
    }, 10);
  }
  
  window.onload = () => {
    scrambleText(document.querySelector(".scramble"), "SILAS ROSÁRIO");
    scrambleText(document.querySelector(".scramble-role"), "Desenvolvedor Web Full Stack");
    const paragraphs = document.querySelectorAll(".scramble-role p");
    paragraphs.forEach(p => {
      scrambleText(p, p.textContent);
    });
  };