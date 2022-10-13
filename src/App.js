import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Header from './componentes/Header/index';
import Footer from './componentes/Footer/index'
import Sobre from './pages/Sobre/index';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>   
        <Route path='/sobre' element={<Sobre/>}/>            
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
