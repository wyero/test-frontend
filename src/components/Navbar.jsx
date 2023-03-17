import React from 'react'
import MessaComp from './MessaComp'
import {BiLeftArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-16 flex items-center opacity-95 relative shadow-md'>
        <div className='text-white flex items-center ml-2'>
            <Link to='/'>
                <BiLeftArrowAlt className='text-[27px] cursor-pointer'/>
            </Link>
            <MessaComp name="Ronaldo"/>
        </div>
    </nav>
  )
}

export default Navbar