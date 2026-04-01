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