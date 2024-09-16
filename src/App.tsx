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
      <Footer />
    </div>
  )
}

export default App
