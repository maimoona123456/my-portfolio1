import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/pic-2.jpg)] bg-left lg:bg-[15%] bg-cover' 
      style={{backgroundSize: "20%"}}
      >
          <Navbar />
          <div className='container grid lg-grif-col-2 h-[cale(100px-60px)]'> 
          <div className='hidden lg:block)' > </div>
          <div className='text-[80px] sm:text-[130px] font-bold leading-tight flex justify-end items-end '>
            
           <div>
            <p data-aos="zoom-in-up"> I'm</p>
            <p data-aos="zoom-in-up"> Muhammad</p>
            <p data-aos="zoom-in-up"> Mansoor</p>
              
             </div> 
            
             </div>


          </div>
    </div>
  )
}

export default Hero
