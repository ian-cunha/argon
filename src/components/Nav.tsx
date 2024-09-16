import logo from '../assets/logo.svg'

function Nav() {

  return (
    <>
      <nav className="navbar fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} alt="Logo" className='logo-bar' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Logotipos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Landing pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Preços</a>
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
