
import Header from './Header'


function Hero() {
  return (
    <main className="">
      <Header />
      <section className='mx-32 mt-3'>
        <div className='bg-bluePrimary px-24 py-10 rounded-[21px] flex items-center justify-between'>
        <div className='   text-white'>
          <p className='font-medium text-[40px]'>Double Your Online Presence</p>
          <h3 className='text-[84px] font-semibold'>New LTE Modem</h3>
          <div className='flex items-center gap-5'>
            <p className='font-medium text-[40px]'>Enjoy Smart Deals</p>
            <img src="/icons/arrowright.svg" alt="" className='mt-2' />
          </div>
        </div>
        <img src="/img/hero-img.png" alt="" />
        </div>
      </section>

      <section className='font-grotesk mx-32 border flex justify-between border-[#E4E7E9] rounded-[10px] px-10 py-5 jus mt-10'>
        <div>
          <img src="/icons/clock.svg" alt="" />
          <p className='text-[21px] text-[#222222] font-semibold'>Super fast</p>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]'/>
        <div>
          <img src="/icons/customer.svg" alt="" />
          <p className='text-[21px] text-[#222222] font-semibold'>Customer support</p>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]'/>
        <div>
          <img src="/icons/coverage.svg" alt="" />
          <p className='text-[21px] text-[#222222] font-semibold'>Wide coverage</p>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]'/>
        <div>
          <img src="/icons/wifi.svg" alt="" />
          <p className='text-[21px] text-[#222222] font-semibold'>Reliable</p>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]'/>
        <div>
          <img src="/icons/server.svg" alt="" />
          <p className='text-[21px] text-[#222222] font-semibold'>Selfcare</p>
        </div>
        <div className='w-[1.3px] bg-[#E4E7E9]'/>
        <div>
          <img src="/icons/file.svg" alt="" />
          <p className='text-[21px] text-[#222222] font-semibold'>Secure</p>
        </div>
      </section>
    </main>
  )
}

export default Hero