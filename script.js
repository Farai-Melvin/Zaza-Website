window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.getElementById('parallax-bg').style.transform = `translateY(${scrolled * 0.2}px)`;
  });