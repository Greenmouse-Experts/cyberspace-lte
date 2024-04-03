import { MdOutlineKeyboardArrowRight } from "react-icons/md"


function Plans() {
  return (
    <section className="my-20">
        <div className='flex justify-between'>
          <h4 className='text-grayPrimary text-3xl font-semibold'>Our Starter Plans and<span className='text-bluePrimary'> Data Pricing</span></h4>
          <div className='flex items-center'>
            <p>see more </p>
            <MdOutlineKeyboardArrowRight color='#0080CF' />
          </div>
        </div>
        <div className='flex w-full items-center mt-10'>
          <div className='bg-bluePrimary h-[3px] w-[30%]' />
          <div className='bg-lightGray h-[0.5px] w-[70%] opacity-50' />
        </div>
    </section>
  )
}

export default Plans