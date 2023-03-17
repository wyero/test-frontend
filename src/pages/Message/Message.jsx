import React from 'react'
import {Navbar, Sidebar, MessaComp} from '../../components'
import {MdOutlineAddLink} from 'react-icons/md'
import {BsSendFill} from 'react-icons/bs'

const Message = () => {
  return (
    <div className='flex'>
        <div className='hidden md:block'>
            <Sidebar/>
        </div>
        <div className='flex-1 relative h-screen'>
            <Navbar/>
            <div className='overflow-hidden'>
                <MessaComp desc="Hallo" style2={'rounded-l-lg rounded-tr-lg bg-green-300 p-3'}/>
                <MessaComp desc="Iya" style2={'rounded-l-lg rounded-tr-lg bg-gray-300 p-3'} style1={'justify-end'}/>
                <MessaComp desc="Bagaimana kabarnya?" style2={'rounded-l-lg rounded-tr-lg bg-green-300 p-3'}/>
                <MessaComp desc="Baik" style2={'rounded-l-lg rounded-tr-lg bg-gray-300 p-3'} style1={'justify-end'}/>
            </div>
            <div className='absolute bottom-0 w-full font-poppins font-600 text-slate-700'>
                <div className='flex items-center relative md:mx-2 bg-slate-300 md:rounded-tl-lg'>
                    <textarea name="" id="" placeholder='Pesan' className=' resize-none md:rounded-tl-lg  w-full py-3 pl-3 pr-5 leading-4 bg-slate-300 focus:outline-none max-w-[90%] border-none'></textarea>
                    <label htmlFor="file" className='text-[30px] cursor-pointer md:absolute right-20'>
                        <MdOutlineAddLink/>
                    </label>
                    <input type="file" id='file' className='hidden'/>
                    <button className='text-white text-[22px] ml-3 md:ml-0 cursor-pointer md:absolute right-0 top-0 bottom-0 bg-blue-500 p-5 duration-150 hover:opacity-80'><BsSendFill/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message