import Container from './components/Container'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Whatsapp from './components/Whatsapp'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Servicos from './components/Servicos';
import Portifolio from './components/Portifolio';
import QuemSomos from './components/QuemSomos';
import Contato from './components/Contato';


function App() {

  return (
    <div className='app'>
      <Nav />
      <Whatsapp />
      <Container />
      <Servicos />
      <Portifolio />
      <QuemSomos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
