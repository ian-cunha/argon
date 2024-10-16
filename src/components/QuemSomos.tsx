import izzi from '../assets/izzi.jpeg';
import ian from '../assets/ian.jpeg';

function QuemSomos() {
    return (
        <>
            <div className="about-section" id='equipe'>
                <h2 className="about-title">Um pouco sobre nós...</h2>
                <p className="about-description">
                    Somos uma equipe apaixonada por design e tecnologia, dedicada a criar soluções digitais que ajudam empresas a se destacarem no mercado. Nossa missão é transformar ideias em realidades visuais, oferecendo serviços personalizados de desenvolvimento web e identidade visual.
                </p>
                <p className="about-description">
                    Valorizamos a criatividade, a inovação e o trabalho em equipe. Acreditamos que cada projeto é uma nova oportunidade de fazer a diferença e ajudar nossos clientes a alcançar seus objetivos.
                </p>

                {/* Equipe */}
                <div className="team-section">
                    <h3 className="team-title">Equipe</h3>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src={izzi} alt="Izzi" />
                            <h4>Ivanise Oliveira</h4>
                            <p>Consultora em Geoprocessamento</p>
                            <p>Atendimento ao cliente</p>
                            <div className="social-links">
                                <a href="https://www.instagram.com/izzibr/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram icon-we"></i></a>
                                <a href="https://www.linkedin.com/in/izzibr/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin icon-we"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={ian} alt="Ian" />
                            <h4>Ian Cunha</h4>
                            <p>Desenvolvedor FullStack/Mobile</p>
                            <p>Designer</p>
                            <div className="social-links">
                                <a href="https://www.instagram.com/ian.pictures/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram icon-we"></i></a>
                                <a href="https://www.linkedin.com/in/iancunha/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin icon-we"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuemSomos;