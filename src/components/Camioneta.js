
import img from '../img/truck.svg';
export const Camioneta = (props) => {
    const { marca, modelo, agencia } = props;
    
    if(marca === '' || modelo === '' || agencia === ''){
        return <h1>Esperando todos los datos ...</h1>
    }

    return (    
        <div className='container-camioneta'> 
            <h2>Camionetas</h2>
            <div className='camioneta-detalles'>
                <img className='img-camioneta' src={img} alt='imagen'/>
                <div className='info-camioneta'>
                    <h3>Información :</h3>
                    <p>Modelo : <strong>{marca}</strong></p>
                    <p>Marca  : <strong>{modelo}</strong> </p>
                    <p>Agencia: <strong>{agencia}</strong> </p>
                </div>
            </div>
        </div>
    )
}
