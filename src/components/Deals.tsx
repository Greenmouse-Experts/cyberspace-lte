import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { PiCreditCardThin, PiHeadphonesThin, PiPackageLight, PiTrophyThin } from 'react-icons/pi'

function Deals() {
  return (
    <>
      <section className='mt-20'>
        <h4 className='text-grayPrimary text-3xl text-center font-semibold'>Grab the best deal on <span className='text-bluePrimary'>Internet Routers</span></h4>

        <div className='flex items-center justify-center gap-20 mt-16'>
          <div className='flex flex-col items-center rounded-[20px] border border-bluePrimary  w-[338px] overflow-hidden'>
            <div className='bg-[#E4E7E9] flex justify-center'>
              <img src="/img/deal-1.png" alt="" className='w-[90%] h-[300px]' />
            </div>
            <p className='text-xl font-medium text-[#222222] mt-3'>Superfast Outdoor ODU Device</p>
            <p className='text-[22px] font-semibold text-[#222222] mt-3'>₦28,500</p>
            <button className='text-lg bg-bluePrimary py-[10px] w-[90%] rounded-[20px] text-white my-2'>Buy Now</button>
          </div>
          <div className='flex flex-col items-center rounded-[20px] border border-bluePrimary  w-[338px] overflow-hidden'>
            <div className='bg-[#E4E7E9] flex justify-center'>
              <img src="/img/deal-2.png" alt="" className='w-[90%] h-[300px]' />
            </div>
            <p className='text-xl font-medium text-[#222222] mt-3'>Superfast Broadband Device</p>
            <p className='text-[22px] font-semibold text-[#222222] mt-3'>₦28,500</p>
            <button className='text-lg bg-bluePrimary py-[10px] w-[90%] rounded-[20px] text-white my-2'>Buy Now</button>
          </div>
          <div className='flex flex-col items-center rounded-[20px] border border-bluePrimary  w-[338px] overflow-hidden'>
            <div className='bg-[#E4E7E9] w-full flex justify-center'>
              <img src="/img/deal-3.png" alt="" className='w-[90%] h-[300px]' />
            </div>
            <p className='text-xl font-medium text-[#222222] mt-3'>Superfast Outdoor IDU Device</p>
            <p className='text-[22px] font-semibold text-[#222222] mt-3'>₦28,500</p>
            <button className='text-lg bg-bluePrimary py-[10px] w-[90%] rounded-[20px] text-white my-2'>Buy Now</button>
          </div>
        </div>

        <div className='text-center mt-10'>
          <button className='border border-bluePrimary px-10 py-3 text-bluePrimary rounded-[50px]'>View All {">"}</button>
        </div>
      </section>
      <section className=' mx-32 border flex justify-between border-[#E4E7E9] rounded-[10px] px-10 py-6 jus mt-10 font-pSans mb-20'>
        <div className='flex items-center gap-3'>
          <PiPackageLight size={40} />
          <div>
            <p className='text-lg text-[#222222] uppercase font-normal'>Fasted Delivery</p>
            <p className='text-sm text-lightGray font-normal'>Delivery in 24/H</p>

          </div>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]' />
        <div className='flex items-center gap-3'>
          <PiTrophyThin size={40} />
          <div>
            <p className='text-lg text-[#222222] uppercase font-normal'>QUALITY DEVICES</p>
            <p className='text-sm text-lightGray font-normal'>100% Quality products</p>

          </div>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]' />
        <div className='flex items-center gap-3'>
          <PiCreditCardThin size={40} />
          <div>
            <p className='text-lg text-[#222222] uppercase font-normal'>Secure Payment</p>
            <p className='text-sm text-lightGray font-normal'>Your money is safe</p>

          </div>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]' />
        <div className='flex items-center gap-3'>
          <PiHeadphonesThin size={40} />
          <div>
            <p className='text-lg text-[#222222] uppercase font-normal'>Support 24/7</p>
            <p className='text-sm text-lightGray font-normal'>Live contact/message</p>

          </div>
        </div>
      </section>

      <section className='my-20'>
        <div className='flex justify-between'>
          <h4 className='text-grayPrimary text-3xl font-semibold'>Explore Great Deals On<span className='text-bluePrimary'> Devices</span></h4>
          <div className='flex items-center'>
            <p>see more </p>
            <MdOutlineKeyboardArrowRight color='#0080CF' />
          </div>
        </div>
        <div className='flex w-full items-center mt-10'>
          <div className='bg-bluePrimary h-[3px] w-[30%]' />
          <div className='bg-lightGray h-[0.5px] w-[70%] opacity-50' />
        </div>


        <div className='flex items-center mt-20 gap-5'>
          <div>
            <img src="/img/deal-4.png" alt="" />
          </div>
          <div>
            <img src="/img/deal-5.png" alt="" />
          </div>
          <div>
            <img src="/img/deal-6.png" alt="" />
          </div>
        </div>
      </section>


    </>
  )
}

export default Deals