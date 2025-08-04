Js
// Future enhancements: navigation scroll highlight, dark mode toggle, project filter, etc.

// Example: scroll shadows effect for nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
