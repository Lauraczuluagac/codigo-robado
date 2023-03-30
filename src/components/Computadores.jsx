import React from 'react'
import Header from './Header'
import mac from '../../public/mac.jpg'
import hp from '../../public/hppavilion.jpg'
import asus from '../../public/asus.jpg'

const Computadores = () => {
  return (
    <section>
        <Header/>
        <h1 className='titulo'>Modelos recientes</h1>
        <img src={mac} alt="" />
        <img src={hp} alt="" />
        <img src={asus} alt="" />

    </section>
  )
}

export default Computadores