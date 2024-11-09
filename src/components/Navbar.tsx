import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'> Mansoor </div>
            <ul className='gap-10 lg-gap-16 hidden md:flex'>
                <li className='meenuLink'> <a href='#hero'> Home </a></li>
                <li className='meenuLink'> <a href='#about'> About </a></li>
                <li className='meenuLink'> <a href='#project'> Project </a></li>
                <li className='meenuLink'> <a href='#skills'> Skills </a></li>
                <li className='meenuLink'> <a href='#contact'> Contact </a></li>

                 </ul>
                   <AiOutlineMenu className='md.hidden' size={35} />

         </div>

    </div>
  )
}

export default Navbar
