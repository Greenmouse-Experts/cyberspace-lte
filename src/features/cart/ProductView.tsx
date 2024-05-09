import { FC, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductItemType } from "../../contracts/product.";

interface Props {
  data: ProductItemType[];
  active: number;
}
const ProductView: FC<Props> = ({ data, active }) => {
  const [products, setProducts] = useState(data);
  useEffect(() => {
    if (active === 0) {
      setProducts(data);
    } else {
      const filtered = data.filter(
        (where) => Number(where.category_id) === active
      );
      setProducts(filtered);
    }
  }, [active]);
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-8">
      {products &&
        products.map((item: ProductItemType) => (
          <ProductItem data={item} key={item.id} />
        ))}
    </div>
  );
};

export default ProductView;
