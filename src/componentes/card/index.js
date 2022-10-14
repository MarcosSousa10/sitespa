import './style.css';
const card = ()=>{
    return(
      <div className=''>
    <div className="card-group">
    <div className="card text-dark text-center border-info">
      <img src="https://www.meudeju.com.br/wp-content/uploads/2021/04/Padaria.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card text-dark text-center border-danger">
      <img src="https://www.padariarequinte.com.br/wp-content/uploads/2021/05/img-sobre-padaria.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card text-dark text-center align-content-center border-dark">
      <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/136/636/products/bananinha_cereal-und-25g1-f7ed2bebdfa064db0415950921105973-480-0.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>)
}
export default card;