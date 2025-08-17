async function loadFooter() {
    const footerHTML = `
      <div class="footer-content">
        <div class="footer-column">
            <h3>Contato</h3>
            <ul>
                <li><a href="mailto:email@exemplo.com">email@exemplo.com</a></li>
                <li>telefone</li>
                <li>endereço</li>
            </ul>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2025 Eduardo Villela. Todos os direitos reservados.</p>
        <p class="credits">Site desenvolvido por <strong><a href="mailto:sergioherman@id.uff.br">Sergio Herman</a></strong> | Conteúdo por <strong>Eduardo Villela</strong>.</p>
      </div>
    `;
    
    const footerElement = document.querySelector('#footer-placeholder');
    footerElement.innerHTML = footerHTML;
}
  
window.addEventListener('DOMContentLoaded', loadFooter);
  