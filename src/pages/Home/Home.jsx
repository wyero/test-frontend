import React from 'react'
import {Sidebar} from '../../components'
import { logo } from '../../assets/image'

const Home = () => {
  return (
    <div className='flex items-center'>
        <Sidebar/>
        <div  className='hidden md:flex items-center flex-col mx-auto'>
          <img src={logo} alt="logo" className='-rotate-6 rounded-md'/>
          <p className='text-gray-300 uppercase mx-auto font-poppins -rotate-6 text-[45px] font-700'>Obrolan</p>
        </div>
    </div>
  )
}

export default Home