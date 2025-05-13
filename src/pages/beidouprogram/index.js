import Navbar from '@/components/Navbar'
import image_1 from '@/assets/北斗计划_image-1.png'
const Program = () => {
  return (  
    <div>
      <Navbar/>
      <div>
        <img 
          src={image_1} 
          alt="美团招聘官网logo"
          className='logo-img'
        ></img>
      </div>
    </div>
  )
}
export default Program;