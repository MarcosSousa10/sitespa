import './style.css';
const faleconosco = () => {
    
return (
    <div className='formulario'>
        
    
    <h1>Preencha Os Campos e Entraremos Em Contato</h1>
<form>
<label for="">Nome:</label>
<input type="text" name="nome" placeholder='Nome' />
 <label for="">Email:</label>
 <input type="email" name="email" placeholder='Email' />
<label for="">TeleFone Para Contato</label>
<input type="tel" name="telefone" placeholder='Telefone' /><br/>
<button type="">Enviar</button>

</form>
</div>
)
}
export default faleconosco;