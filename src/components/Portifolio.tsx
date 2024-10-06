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
                        <img src="link-para-imagem2.jpg" alt="Projeto 2" />
                        <h3>Projeto 2</h3>
                        <p>Descrição do projeto 2.</p>
                        <a className="btn-port" href="#" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
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
