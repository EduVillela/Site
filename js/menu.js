document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // evita o clique "subir" para o document e fechar na hora
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            hamburger.innerHTML = '&#10005;'; // X
        } else {
            hamburger.innerHTML = '&#9776;'; // hamburguer
        }
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active')) {
            // Se o clique NÃO for no menu e NÃO for no hamburguer, fecha
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('active');
                hamburger.innerHTML = '&#9776;';
            }
        }
    });
});