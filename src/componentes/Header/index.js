import { Link } from "react-router-dom";
import './style.css';
const Header = () => {



    return(
<main className="container-main">
    <h1>Consultoria</h1>
    <ul>
        <li><Link to={'/'}><a>Home</a></Link></li>
        <li><Link to={'/Services'}><a>Serviços</a></Link></li>
        <li><Link to={'/Contato'}><a>Contato</a></Link></li>
    </ul>
</main>
    )
}
export default Header;