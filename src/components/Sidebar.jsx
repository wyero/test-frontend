import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import MessaComp from './MessaComp'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar w-full md:w-[300px] font-poppins text-white'>
        <h1 className='text-[35px] font-700 px-3 mb-5 pt-1 cursor-pointer'>Obrolan</h1>
        <div className='flex items-center relative mb-3'>
            <div className='absolute left-4 z-50 text-gray-400 text-[20px]'>
                <AiOutlineSearch/>
            </div>
            <input type="search" placeholder='Cari' className='border-2 text-gray-500 text-[15px] pl-7 pr-2 bg-white rounded-md py-1 w-full mx-3 outline-none'/>
        </div>
        <Link to="/chats">
          <MessaComp name="Ronaldo" desc="Hallo apa kabar?" style1={'hover:bg-gray-700'} style2={'line-clamp-2'}/>
        </Link>
        <Link to="/chats">
          <MessaComp name="Ciro" desc="Hallo ciro" style1={'hover:bg-gray-700'} style2={'line-clamp-2'}/>
        </Link>
        <Link to="/chats">
          <MessaComp name="Test" desc="test" style1={'hover:bg-gray-700'} style2={'line-clamp-2'}/>
        </Link>
    </div>
  )
}

export default Sidebar