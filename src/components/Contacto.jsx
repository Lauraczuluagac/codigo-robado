import servicio from '../../public/servicioalcliente.png'
const Contacto = () => {
    return (
        <section>
            
            <form action="" method="get" className="contacto">
                <h1 className="servicio">Servicio al cliente</h1>
                <ul className="formulario">
                    <li>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" size={100} name="" id="" />
                    </li>
                    <li>
                        <label htmlFor="">Telefono</label>
                        <input type="tel" size={100} />

                    </li>
                    <li>
                        <label htmlFor="">Correo</label>
                        <input type="email" size={100} name="" id="" />
                    </li>
                    <li>
                        <label htmlFor="">Mensaje</label>
                        <input type="text" size={100} name="" id="" />
                    </li>

                    <button className="boton" type="">ENVIAR</button>


                </ul>
                <img className='imagen' src={servicio} alt="" />
            </form>
            
        </section>

    )
}

export default Contacto