import './footer.css'

function FooterComponent () {
    return (
      <div className="footer-container">
        <div class="contact-info">
            <h2>Contatos</h2>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (11) 12345-6789</p>
            <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
        </div>
        <div className="social-media">
            <h2>Redes Sociais</h2>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
        <div classNames="additional-info">
            <h2>Informações</h2>
            <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </div>
      </div> 
    )

}

export default FooterComponent


    
