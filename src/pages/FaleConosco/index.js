
import './style.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function FaleConosco() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [observacao, setObservacao] = useState('');
const [limpo,setLimpo]= useState({nome:"",email:"",telefone:"",assunto:"",obeservacao:""});
  
  const saveTask= async () => {
   const task = await axios.post('https://bepadaria.herokuapp.com/todo', {
    nome:nome,
    email:email,
    telefone:telefone,
    assunto:assunto,
    observacao:observacao,
  });
  }  
const mudarPagina=()=>{
  window.location.href = "/";

}
    return (
      
        <div className='formulario'>
          
            <h1>Preencha o Formulatio e Entraremos Em Contato Se Nescessario</h1>
            <h4>Reclamações, Elogios e/Ou Encomendas</h4>
            <div className='form'>
              <label htmlFor="">Informe Seu Nome:</label>
              <input type="text" placeholder='Nome'   onChange={(txt)=>setNome(txt.target.value)}  />
              <label htmlFor="">Informe Seu Email:</label>
              <input type="text" placeholder='Email' onChange={(txt)=>setEmail(txt.target.value )}/>
              <label htmlFor="">Informe Seu Telefone:</label>
              <input type="text" placeholder='Telefone' onChange={(txt)=>setTelefone(txt.target.value)}/>
              <label htmlFor="">Informe o Assunto:</label>
              <input type="text" placeholder='Assunto'  onChange={(txt)=>setAssunto(txt.target.value)}/>
              <label htmlFor="">Observaçao, Reclamações e/ou Elogios</label>
             <textarea cols="30" rows="7" style={{resize:'none'}} placeholder='Observaçao, Reclamações e/ou Elogios' onChange={(txt)=>setObservacao(txt.target.value)}></textarea><br />
             <Link to={'/'}><button className='btn btn-outline-success salvar' onClick={()=>{saveTask() ;alert("Enviado Com Sucesso")}}>Enviar</button></Link>
            </div>
          
       
        
      </div>
    );
  }
  
  export default FaleConosco;
  