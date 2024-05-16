import { BsSearch } from "react-icons/bs";
import ProductCategory from "./ProductCategory";
import { useProducts } from "./useProducts";
import { useState } from "react";
import { useCategory } from "./useCategory";
import ProductView from "./ProductView";
import Loader from "../../components/Loader";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function ProductOverview() {

  const { products, isLoading } = useProducts()
  const { category, isLoading:loading} = useCategory()
  const [active, setActive] = useState(0)


  if (loading || isLoading) return <Loader/>

  return (
    <section className="mt-20">
     <div className="flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-10 mb-20 w-full" >
     <div className="sm:w-[400px] w-full  2xl:h-[60px] h-16 relative lg:block">
        <BsSearch
          color="#0080CF"
          size={20}
          className="absolute left-4 2xl:top-5 md:top-4 top-5 "
        />
        <input
          type="text" 
          className=" w-full h-full bg-[#F3F9FB] px-14 text-bluePrimary rounded-xl 2xl:placeholder:text-[16px] placeholder:text-grayPrimary placeholder:text-[12px]"
          placeholder="Search products..."
        />
      </div>
      <NavLink
            to="/personalplan"
            className="border border-bluePrimary px-11 py-5 dark:text-white text-white bg-bluePrimary rounded-[50px] flex items-center justify-center animate__animated animate__pulse animate__infinite animate__slow"
          >
            View Plans
            <span className="text-white">
              <IoIosArrowForward className="dark:!text-white" />
            </span>
          </NavLink>
     </div>
      <div className="flex lg:flex-row flex-col items-start justify-between gap-20">
        <ProductCategory data={category?.data} isLoading={loading} active={active} setActive={setActive}/>
      
         <ProductView data={products?.data} active={active}/>
      
      </div>
    </section>
  );
}

export default ProductOverview;
