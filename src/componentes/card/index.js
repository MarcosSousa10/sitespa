import './style.css';
const card = ()=>{
    return(
      <div className='container mb-5'>
    <div className="card-group">
    <div className="card text-dark text-center will  border-dark ">
      <img src="https://www.meudeju.com.br/wp-content/uploads/2021/04/Padaria.png" className="card-img-top" alt="..."/>
      <div className="card-body  border-5 border-dark ">
        <h5 className="card-title at">Pão Francês</h5>
        <p className="card-text at ">O pao francês, também conhecido como pão cacetinho, pãozinho ou pão de sal, é um tipo de pão feito de farinha, sal, água e fermento. Este pão tem um exterior crocante, e é popular no Chile, Brasil, na região dos Andes da Bolívia e do Peru mas também pode ser encontrado na Argentina e no Uruguai.</p>
        <p className="card-text"><small className="text-muted text-success">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card text-dark text-center will border-dark ">
      <img src="https://www.padariarequinte.com.br/wp-content/uploads/2021/05/img-sobre-padaria.png" className="card-img-top" alt="..."/>
      <div className="card-body ">
        <h5 className="card-title at">Diversidades</h5>
        <p className="card-text at">Trabalhamos com diversos tipos de pães.</p>
        <p className="card-text"><small className="text-muted text-success">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card text-dark text-center will align-content-center border-dark ">
      <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/136/636/products/bananinha_cereal-und-25g1-f7ed2bebdfa064db0415950921105973-480-0.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title at">Pão doce simples e fofinho com calda de leite condensado</h5>
        <p className="card-text at">Pão doce é um tipo de pão muito comum no Brasil e em Portugal. A receita varia conforme a região de origem. Nas padarias e confeitarias do Rio de Janeiro, o pão doce é extremamente comum e consiste em um pão de massa doce com creme de baunilha decorado com frutas em calda e cobertura de fondant e geleia de brilho.</p>
        <p className="card-text"><small className="text-muted text-success">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>)
}
export default card;