function Portifolio() {
    return (
        <>
            <div className="portfolio-section" id='portifolio'>
                <h2 className="portfolio-title">Portfólio</h2>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src="https://www.izzipaper.shop/assets/logo-D4ltdFPI.png" alt="izzi.paper" />
                        <h3>izzi.paper</h3>
                        <p>Loja de produtos de palelaria, chaveiros e mangás.</p>
                        <a className="btn-port" href="https://www.izzipaper.shop" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://www.emporiumdojogador.online/assets/logo-ND8VWH2Y.svg" alt="Emporium do jogador" />
                        <h3>Emporium do jogador</h3>
                        <p>Plataforma de rpg de mesa, criador de ficha, dado virtual, gerenciador de personagem e muito mais!</p>
                        <a className="btn-port" href="https://www.emporiumdojogador.online" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portifolio;
