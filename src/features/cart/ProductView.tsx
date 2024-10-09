import { FC, useEffect, useState } from "react";
import ProductItem from "./ProductItem";

import { useLocation } from "react-router-dom";
import { ProductItemType } from "../../contracts/product.";

interface Props {
  data: ProductItemType[];
  active: number;
}

const ProductView: FC<Props> = ({ data, active }) => {
  const [products, setProducts] = useState(data);
  const location = useLocation();

 
  const getSearchParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get("search") || "";  
  };

  useEffect(() => {
    const searchQuery = getSearchParams()?.toLowerCase() || "";  

    // Filter products by category and search query
    let filteredProducts = data;
    if (active !== 0) {
      filteredProducts = filteredProducts.filter(
        (item) => Number(item.category_id) === active
      );
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((item) =>
        item.product_name?.toLowerCase().includes(searchQuery)
      );
    }

    setProducts(filteredProducts);
  }, [active, location.search]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-8 items-center sm:w-auto w-full">
      {products?.length !== 0 ? (
        products.map((item: ProductItemType) => (
          <ProductItem data={item} key={item.id} />
        ))
      ) : (
        <h4>Out of stock</h4>
      )}
    </div>
  );
};

export default ProductView;
