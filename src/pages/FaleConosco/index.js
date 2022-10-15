import './style.css';
const faleconosco = () => {
    
return (
    <div className='container formulario'>
        
    
    <h1>Preencha Os Campos e Entraremos Em Contato</h1><br/>
    <h4>Para Orçamentos, Encomendas Entre Outros </h4>
<form>
<label for="">Nome:</label>
<input type="text" name="nome"  placeholder='Nome' /><br/>
 <label for="">Email:</label>
 <input type="email" name="email" placeholder='Email' /><br/>
<label for="">TeleFone Para Contato</label>
<input type="tel" name="telefone" placeholder='Telefone' /><br/>
<label for="">Assunto</label>
<input type="text" name="observacao" placeholder='Assunto'/><br/>
<label for="">Reclamações, Elogios e/ou Observações</label>
<textarea rows="5" cols="30"style={{resize:'none'}} placeholder='Reclamações, Elogios e/ou Observações'></textarea><br/>
<button type="submit" className='btn btn-primary'>Enviar</button>

</form>
</div>
)
}
export default faleconosco;