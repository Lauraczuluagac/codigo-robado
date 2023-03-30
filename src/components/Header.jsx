import logo from '../../public/logo.jpg'

const Header = () => {
  return (
    <header className='encabezado'>
      <section className='logo'>
          <img src={logo} alt="" />
        </section>
        <nav className='menu'>
          <a href="">Inicio</a>
          <a href="">Celulares</a>
          <a href="">Computadores</a>
          <a href="">Tablets</a>
        </nav>
        
            
        
    </header>
  )
}

export default Header