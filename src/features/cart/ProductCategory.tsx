import { useState } from "react";


function ProductCategory() {

    const [tab, setTab] = useState(1);

  return (
    <div className=" bg-blue-100 h-full w-[20%] px-4 pb-20 pt-5 rounded-md">
        <h3 className=" border-b-4 border-black">Categories</h3>
        <div className='flex flex-col items-start gap-1 mt-10'>
            <p onClick={() => setTab(1)} className={`px-3 py-2 cursor-pointer rounded-md w-full font-medium ${tab === 1 && "active bg-bluePrimary text-white"} `}>All categories</p>
            <p onClick={() => setTab(2)} className={`px-3 py-2 cursor-pointer rounded-md w-full font-medium ${tab === 2 && "active bg-bluePrimary text-white"}  `}>Router</p>
            <p onClick={() => setTab(3)} className={`px-3 py-2 cursor-pointer rounded-md w-full font-medium ${tab === 3 && "active bg-bluePrimary text-white"} `}>Spectranet</p>
        </div>
    </div>
  )
}

export default ProductCategory