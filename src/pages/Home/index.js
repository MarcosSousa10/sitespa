import './style.css';
import Cards from '../../componentes/cards/card';
import Carrossel from '../../componentes/carrossel';
import Card from '../../componentes/card/index';
const home = () => {
    
return (
<div className='ae'>
<Carrossel />
<div className='container conter'>

<p className='textohome'>A vida anda muito corrida e você ainda não teve tempo de comer alguma coisa? Então dê uma passadinha na nossa padaria e confira os nossos produtos! Sempre fresquinho e de altíssima qualidade! O (nome do supermercado) te deseja um bom apetite!
</p>
</div>
<Card/>
</div>
)
}
export default home;