import './style.css';
import { Link } from 'react-router-dom';

const headers=()=>{
    return (
        <nav>
            <h1>Header</h1>
            <ul>
                <li><Link to={'/'} >Home</Link> </li>
                <li><Link to={'/sobre'}>Sobre</Link></li>
            </ul>
        </nav>
    )
}
export default headers;