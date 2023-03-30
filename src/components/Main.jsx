import motorola from '../../public/motorola.jfif'
import samsung from '../../public/samsung.jpg'
import iphone from '../../public/iphone.webp'
import redmi from '../../public/xiaomi.jfif'
import hp from '../../public/hp.jpg'
import asus from '../../public/asus.png'


const Main = () => {
    return (
        <main className='contenido'>
            
            <section className='galeria'>
                <img src={motorola} alt="" />
                <img src={samsung} alt="" />
                <img src={iphone} alt="" />
                <img src={redmi} alt="" />
                <img src={hp} alt="" />
                <img src={asus} alt="" />
            </section>
            
        
            

        </main>

    )
}

export default Main