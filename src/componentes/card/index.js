import './style.css';
const card = ()=>{
    return(
    <div className="card-group">
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>)
}
export default card;