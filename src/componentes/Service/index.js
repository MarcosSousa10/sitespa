import './style.css';
const Service = ({name = "Sem Nome"}) => {



    return(
        
        
            <div className='service'>
                <img src="https://stories.freepiklabs.com/storage/36926/business-decisions-amico-5405.png" alt="Service" />
                <p>Serviço {name}</p>
            </div>
    )
}
export default Service;