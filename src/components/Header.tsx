import React from 'react'
import { BsCart2, BsPatchCheck, BsSearch } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import { TbTruckDelivery } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className=''>
      <div className='flex justify-between items-center py-5 2xl:px-32 md:px-24 bg-bluePrimary text-white text-[19px] font-grotesk'>

        <p className=''>  Welcome to Cyberspace LTE!</p>


        <div className='flex gap-6 items-center font-sora text-[18px] text-white'>
          <div className='flex gap-1 items-center'>
            <BsPatchCheck color="white" size={25} />
            <p>All Offers</p>
          </div>
          <div className='flex gap-1 items-center border-r border-white pr-4'>
            <CiLocationOn color="white" size={25} />
            <p className='font-[300]'>12 Ologun Agbaje Street, Victoria Island, Lagos, Nigeria</p>
          </div>
          <div className='flex gap-1 items-center border-r border-white pr-4'>
            <TbTruckDelivery color="white" size={25} />
            <p className='font-[300]'>Location Delivery</p>
          </div>

        </div>
      </div>


      <div className='flex items-center gap-20 font-grotesk text-[21.7px] py-5 border-b-[0.6px] border-[#EDEDED]'>
        <div className='2xl:px-32 md:px-24'>
          <img src="/logo.svg" alt="" />
        </div>
        <nav className=''>
          <ul className='flex gap-10 items-center text-[#666666] font-bold'>
            <li><a href="">Shop Products</a></li>
            <li><a href="">Coverage</a></li>
            <li><a href="">Our dealers</a></li>
          </ul>
        </nav>
        <div className='w-[400px] h-[60px] relative'>
          <BsSearch color='#0080CF' size={25} className='absolute left-4 top-4' />
          <input type="text" className=' w-full h-full bg-[#F3F9FB] px-14 text-bluePrimary rounded-xl placeholder:text-[19px]' placeholder='Search devices, plans and more...' />

        </div>
        <div className='flex gap-6'>
          <div className='flex items-center gap-1'>
            <FiUser color='#0094EF' size={25} />
            <p className='font-bold text-bluePrimary'>Client Login</p>
          </div >
          <div className='flex items-center gap-1'>
            <BsCart2 color='#0094EF' size={25} />
            <p className='font-bold text-grayPrimary'>Cart</p>
          </div >
        </div>
      </div>
    </header>
  )
}

export default Header