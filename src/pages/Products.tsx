import Banner from "../components/Banner"
import ProductOverview from "../features/cart/ProductOverview"


function Products() {
  return (
    <>
    <Banner text="Products" title="products" image="/img/product-banner.png"/>

    <ProductOverview/>
    </>
  )
}

export default Products