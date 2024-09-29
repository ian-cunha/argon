import Container from './components/Container'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Whatsapp from './components/Whatsapp'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {

  return (
    <div className='app'>
      <Nav />
      <Whatsapp />
      <Container />

      {/* Seção "Serviços" */}
      <div className="services-section container py-5">
        <h2 className="services-title text-center mb-4">Serviços</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item p-3 border rounded shadow h-100 d-flex flex-column">
              <h3>Desenvolvimento de Sites</h3>
              <p>Oferecemos serviços completos de desenvolvimento web, priorizando a experiência do usuário e a performance.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item p-3 border rounded shadow h-100 d-flex flex-column">
              <h3>Criação de Logos</h3>
              <p>Desenvolvemos identidades visuais marcantes que refletem a essência da sua marca.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item p-3 border rounded shadow h-100 d-flex flex-column">
              <h3>Design Gráfico</h3>
              <p>Soluções de design gráfico que ajudam a comunicar sua mensagem de forma eficaz.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item p-3 border rounded shadow h-100 d-flex flex-column">
              <h3>Marketing Digital</h3>
              <p>Estratégias personalizadas para aumentar sua visibilidade online e engajar seu público-alvo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Portfólio */}
      <div className="portfolio-section">
        <h2 className="portfolio-title">Portfólio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="link-para-imagem1.jpg" alt="Projeto 1" />
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
          </div>
          <div className="portfolio-item">
            <img src="link-para-imagem2.jpg" alt="Projeto 2" />
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className="portfolio-item">
            <img src="link-para-imagem3.jpg" alt="Projeto 3" />
            <h3>Projeto 3</h3>
            <p>Descrição do projeto 3.</p>
          </div>
          <div className="portfolio-item">
            <img src="link-para-imagem4.jpg" alt="Projeto 4" />
            <h3>Projeto 4</h3>
            <p>Descrição do projeto 4.</p>
          </div>
        </div>
      </div>

      {/* Seção "Quem Somos" */}
      <div className="about-section">
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
              <img src="link-para-foto1.jpg" alt="Membro 1" />
              <h4>Ivanise</h4>
              <p>Função 1</p>
            </div>
            <div className="team-member">
              <img src="link-para-foto2.jpg" alt="Membro 2" />
              <h4>Ian</h4>
              <p>Função 2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção "Contato" */}
      <div className="contact-section">
        <h2 className="contact-title">Entre em Contato</h2>
        <div className="contact-methods">
          <a className="contact-link" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i> WhatsApp
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a className="contact-link" href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
