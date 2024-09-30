import { useState } from 'react';
import logo from '../assets/logo.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} alt="Logo" className='logo-bar' />
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <i className="bi bi-three-dots fs-2"></i>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navId">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNav}>Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos" onClick={closeNav}>Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portifolio" onClick={closeNav}>Portifólio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#equipe" onClick={closeNav}>Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato" onClick={closeNav}>Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
