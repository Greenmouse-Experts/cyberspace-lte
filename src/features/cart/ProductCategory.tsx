import React, { FC } from "react";
import { CategoryItemType } from "../../contracts/product.";

interface Props {
  data: CategoryItemType[];
  isLoading: boolean;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}
const ProductCategory: FC<Props> = ({ data, isLoading, active, setActive }) => {
  return (
    <>
      <div className=" bg-[#F3F9FB] dark:bg-gray-900 h-full w-[30%] hidden lg:block px-4 pb-20 pt-5 rounded-md">
        <h4 className=" border-b-4 border-black dark:border-white">
          Categories
        </h4>
        <div className="flex flex-col items-start gap-1 mt-10">
          <p
            onClick={() => setActive(0)}
            className={`px-3 py-2 cursor-pointer rounded-md w-full font-medium ${
              active === 0 && "active bg-bluePrimary text-white"
            } `}
          >
           View All
          </p>
          {!isLoading &&
            data &&
            data?.map((item: CategoryItemType) => (
              <p
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`px-3 py-2 cursor-pointer rounded-md w-full font-medium ${
                  active === item.id && "active bg-bluePrimary text-white"
                }  `}
              >
                {item.name}
              </p>
            ))}
        </div>
      </div>
      <div className="lg:hidden block w-full">
        <h3 className=" border-b-2 border-black mb-5">Categories</h3>
        <select
          className="w-full h-14 text-black text-lg   bg-[#F3F9FB] rounded-lg px-3"
          value={active}
          onChange={(e) => setActive(parseInt(e.target.value))}
        >
          <option value={0}>All categories</option>
          {data?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ProductCategory;
