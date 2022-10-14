import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {



    return(
<main className="container-main navbar navbar-dark bg-dark">
    <img className="img" src="https://lirp.cdn-website.com/80774b77/dms3rep/multi/opt/padaria+casa+aurora+%281%29-1920w.png" alt="" />
    <ul>
        <li><Link to={'/'}><a>Home</a></Link></li>
        <li><Link to={'/Services'}><a>Serviços</a></Link></li>
        <li><Link to={'/faleconosco'}><a>Fale Conosco</a></Link></li>
    </ul>
</main>
    )
}
export default Header;