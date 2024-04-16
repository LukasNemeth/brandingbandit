// Add this script to the bottom of your body tag
const ctaBar = document.getElementById('cta-bar');
window.onscroll = function() {
  if (window.scrollY > 100) {
    ctaBar.style.display = 'block';
  } else {
    ctaBar.style.display = 'none';
  }
};

