import React, { FC } from "react";

interface Props {
  data: CategoryItemType[];
  isLoading: boolean;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}
const ProductCategory: FC<Props> = ({ data, isLoading, active, setActive }) => {
  return (
    <div className=" bg-blue-100 h-full w-[30%] px-4 pb-20 pt-5 rounded-md">
      <h3 className=" border-b-4 border-black">Categories</h3>
      <div className="flex flex-col items-start gap-1 mt-10">
        <p
          onClick={() => setActive(0)}
          className={`px-3 py-2 cursor-pointer rounded-md w-full font-medium ${
            active === 0 && "active bg-bluePrimary text-white"
          } `}
        >
          All categories
        </p>
        {!isLoading &&
          data &&
          data.map((item:CategoryItemType) => (
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
  );
};

export default ProductCategory;
