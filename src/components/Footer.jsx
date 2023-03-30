import instagram from '../../public/instagram.png'
import facebook from '../../public/facebook.png'
import wtsp from '../../public/wtsp.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="http://www.instagram.com/"><img src={instagram} alt="" /></a>
      <a href="https://es-la.facebook.com/"><img src={facebook} alt="" /></a>
      <a href="https://web.whatsapp.com/"><img src={wtsp} alt="" /></a>




    </footer>
  )
}

export default Footer