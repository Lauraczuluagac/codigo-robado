import React from 'react'
import Header from './Header' 
import tabletmac from '../../public/tabletmac.jpg'
import tabletsamsung from '../../public/tabletasamsung.jpg'
import tabletasus from '../../public/asustablet.jpg'

const Tablets = () => {
  return (
    <section>
        <Header/>
        <h1 className='titulo'>Modelos recientes</h1>
        <img src={tabletmac} alt="" />
        <img src={tabletsamsung} alt="" />
        <img src={tabletasus} alt="" />
    </section>
  )
}

export default Tablets