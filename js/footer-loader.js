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
        <p>&copy;&nbsp;2025&nbsp;Eduardo&nbsp;Villela. Todos&nbsp;os&nbsp;direitos&nbsp;reservados.</p>
        <p class="credits">Site&nbsp;desenvolvido&nbsp;por <strong><a href="mailto:sergioherman@id.uff.br">Sergio&nbsp;Herman</a></strong>&nbsp;| Conteúdo&nbsp;por&nbsp;<strong>Eduardo&nbsp;Villela</strong>.</p>
      </div>
    `;
    
    const footerElement = document.querySelector('#footer-placeholder');
    footerElement.innerHTML = footerHTML;
}
  
window.addEventListener('DOMContentLoaded', loadFooter);
  