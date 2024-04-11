import Advert from "../components/Advert";
import Banner from "../components/Banner";
import Cart from "../features/cart/Cart";

function CartPage() {
  return (
    <>
      <Banner title="cart" text="cart" />
      <Cart />
      <Advert />
    </>
  );
}

export default CartPage;
