async function loadHeader() {
    const headerHTML = `
        <div class="banner-background">
            <div class="banner">
                <div class="banner-content">
                    <div class="author-photo">
                        <img src="assets/images/img-banner.jpeg" alt="Foto do autor">
                    </div>
                    <div class="author-info">
                        <h1><a href="index.html">Eduardo&nbsp;Villela M.&nbsp;dos&nbsp;Reis</a></h1>
                        <hr>
                        <h6><a href="index.html">Página Pessoal</a></h6>
                    </div>
                </div>
                <ul class="banner-contact">
                    <h3>Contato</h3>
                    <ul>
                        <li><a href="mailto:email@exemplo.com">email@exemplo.com</a></li>
                        <li>telefone</li>
                        <li>endereço</li>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="nav-container">
            <nav class="navbar mobile-menu">
                <ul>
                    <li><a href="./index.html">Sobre</a></li>
                    <li><a href="./pages/formacao.html">Formação</a></li>
                    <li><a href="./pages/publicacoes.html">Publicações</a></li>
                    <li><a href="./pages/desafios.html">Desafios</a></li>
                    <li><a href="./pages/projetos.html">Projetos</a></li>
                </ul>
            </nav>
        </div>
        <div class="hamburger">
            &#9776;
        </div>
    `;
    
    const headerElement = document.querySelector('#header-placeholder');
    headerElement.innerHTML = headerHTML;
}
  
window.addEventListener('DOMContentLoaded', loadHeader);
  