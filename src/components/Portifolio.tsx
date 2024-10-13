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
                        <p>Embarque em suas aventuras de Dungeons & Dragons com o Emporium do Jogador e descubra um mundo de raças, classes e magias. Seja o mestre do seu destino e deixe que o Emporium do Jogador ilumine seu caminho através dos reinos mágicos e perigosos de D&D. Que as rolagens de dados estejam sempre a seu favor!</p>
                        <a className="btn-port" href="https://www.emporiumdojogador.online" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </div>
                    <div className="portfolio-item">
                        <img src="link-para-imagem3.jpg" alt="Projeto 3" />
                        <h3>Projeto 3</h3>
                        <p>Descrição do projeto 3.</p>
                        <a className="btn-port" href="#" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portifolio;
