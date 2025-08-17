window.addEventListener('load', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
  
    if (hamburger && menu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
            hamburger.innerHTML = menu.classList.contains('active') ? '&#10005;' : '&#9776;';
        });
  
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
            }
        });
    }
});
  