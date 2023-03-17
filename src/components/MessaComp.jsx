import React from 'react'
import { profile } from '../assets/image'

const MessaComp = ({name, desc, style1, style2}) => {
  return (
    <section>
        <div className={`flex items-center mx-1 gap-3 my-2 p-2 rounded-md ${style1}`}>
            <img src={profile} alt={name} className='w-12 h-12 rounded-full'/>
            <div className='font-poppins text-[14px]'>
                <p className='font-700 text-[15px]'>{name}</p>
                <p className={`font-600 ${style2}`}>{desc}</p>
            </div>
        </div>
    </section>
  )
}

export default MessaComp