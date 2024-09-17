import logo from '../assets/logo.svg'

function Nav() {

  return (
    <>
      <nav className="navbar fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} alt="Logo" className='logo-bar' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navId" aria-controls="navId" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-three-dots fs-2"></i>
          </button>
          <div className="collapse navbar-collapse" id="navId">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portifólio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
