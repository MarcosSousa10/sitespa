import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {



    return(
<main className="container-main navbar navbar-dark bg-dark">
    <img className="img" src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt="" />
    <ul>
        <li><Link to={'/'}><a>Home</a></Link></li>
        <li><Link to={'/Services'}><a>Serviços</a></Link></li>
        <li><Link to={'/Contato'}><a>Contato</a></Link></li>
    </ul>
</main>
    )
}
export default Header;