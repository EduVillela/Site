const menu = document.querySelector('.mobile-menu');


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
  
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');

        // Alternar o ícone
        if (menu.classList.contains('active')) {
            hamburger.innerHTML = '&#10005;'; // ✖ (X)
        } else {
            hamburger.innerHTML = '&#9776;'; // ☰ (hambúrguer)
        }

    });
});