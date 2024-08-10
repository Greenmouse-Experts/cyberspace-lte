import { FC, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductItemType } from "../../contracts/product.";

interface Props {
  data: ProductItemType[];
  active: number;
}
const ProductView: FC<Props> = ({ data, active }) => {
  
  console.log(active)
  const [products, setProducts] = useState(data);
  useEffect(() => {
    if (active === 0) {
      setProducts(data);
    } else {
      const filtered = data?.filter(
        (where) => Number(where.category_id) === active
      );
      setProducts(filtered);
    }
  }, [active]);
  return (
    <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-8 items-center sm:w-auto w-full">
      {products?.length !== 0 ?
        products?.map((item: ProductItemType) => (
          <ProductItem data={item} key={item.id} />
        )) : <h4>Out of stock</h4>}
    </div>
  );
};

export default ProductView;
