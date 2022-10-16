import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {



    return(
<main className="container-main navbar navbar-dark bg-dark  ">
    <Link to={'/'}><img className="img" src="https://lirp.cdn-website.com/80774b77/dms3rep/multi/opt/padaria+casa+aurora+%281%29-1920w.png" alt="" /></Link>
    <h2 >Padaria e Mercearia Mix</h2>
    <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/sobre'}>Sobre</Link></li>
        <li><Link to={'/faleconosco'}>Fale Conosco</Link></li>
    </ul>
</main>
    )
}
export default Header;