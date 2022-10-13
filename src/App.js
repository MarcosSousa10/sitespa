import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Services from '../src/componentes/Service/index';
import Header from "./componentes/Header/index";
import Footer from "./componentes/Footer/index";
import './style.css';

function App() {

    return (  
    <BrowserRouter >
        <Header/>
        <Routes>
        <Route path = '/' element={ <Home/>}/> 
        <Route path = '/services'  element={<Services/>}/> 
        </Routes>
        <Footer/>
        </BrowserRouter> 

    );
}

export default App;