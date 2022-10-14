import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const card=()=>{
  const computador = 'https://cdn.dooca.store/18579/products/784-2_250x250+fill_ffffff.jpg?v=1651761979';
    return(
      <div className='b container'>
      <div class="card mb-3" style={{maxWidth: "540px;"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={computador} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    )
}
export default card;