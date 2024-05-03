import { BsSearch } from "react-icons/bs";
import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

function ProductOverview() {

  const { products} = useProducts()
  console.log(products)
  return (
    <section className="mt-20">
      <div className="sm:w-[400px] w-full mb-20 2xl:h-[60px] h-[40px] relative lg:block hidden">
        <BsSearch
          color="#0080CF"
          size={20}
          className="absolute left-4 2xl:top-4 top-3"
        />
        <input
          type="text"
          className=" w-full h-full bg-[#F3F9FB] px-14 text-bluePrimary rounded-xl 2xl:placeholder:text-[16px] placeholder:text-grayPrimary placeholder:text-[12px]"
          placeholder="Search products..."
        />
      </div>
      <div className="flex items-start justify-between">
        <ProductCategory />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-8 ">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
