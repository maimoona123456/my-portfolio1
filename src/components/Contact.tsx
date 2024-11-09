import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>        
                <h2 className='text-5xl'data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up"> 
                    Drop me a line, give me a call, or send me a message by submitting the form.         
                      </p>

                <div className='Flex gap-3 items-center' data-aos="zoom-in-up">
                 < MdOutlineEmail size={30} /> xyz@gmail.com
                             </div>
                
            ``   <div className='Flex gap-3 items-center' data-aos="zoom-in-up">
                 <BsTelephone size={30} /> (021) 000-000
                             </div>
                               
                </div> 

        </div>
      
    </div>
  )
}

export default Contact
