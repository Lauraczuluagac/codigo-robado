import React from 'react'
import Header from './Header'
import zflip from '../../public/zflip4.png'
import motox40 from '../../public/moto-x40.webp'
import iphone14promax from '../../public/14promax.jpg'
import xiaomi12pro from '../../public/Xiaomi 12pro.png'

const Celulares = () => {
    return (
        <section>
            <Header />
            <h1 className='titulo'> Modelos recientes</h1>
            <div>
                <img src={zflip} alt="" />
                <img src={motox40} alt="" />
                <img src={iphone14promax} alt="" />
                <img src={xiaomi12pro} alt="Mejor procesador, con el sistema de carga más rápido del momento" />
            </div>

        </section>


    )
}

export default Celulares