// import { useAppDispatch, useAppSelector } from "../state/hooks";
// import { CartItemTyping, addItem, getCart, removeItems } from "../state/cart/cartSlice";


// const useCart = () => {
//   const dispatch = useAppDispatch();
//   const cartAll = useAppSelector(getCart);
//   const items = cartAll.items
//   const total = cartAll.totalPrice
//   const cartCount = items.length || 0

//   const addProduct = (item: CartItemTyping) => {
//     const filtered = items.filter((where) => where.id === item.id)
//     if(!!filtered.length){
//       const remaining = items.filter((where) => where.id !== item.id)
//       const payload = {
//         ...filtered[0],
//         quantity: filtered[0].quantity + item.quantity
//       }
//       dispatch(addItem([...remaining, payload ]))
//     }else {
//       dispatch(addItem([...items, item ]))
//     }
//   }
//   const removeProduct = (item: CartItemTyping) => {
//     const filtered = items.filter((where) => where.id === item.id)
//     if(!!filtered.length){
//       const remaining = items.filter((where) => where.id !== item.id)
//       dispatch(addItem([...remaining]))
//     }
//   }
//   const clearProduct = () => {
//     dispatch(removeItems())
//   }
//   // const updateCartTotal = async (list: CartItemTyping[]) => {
//   //   if (!list) return;
//   //   const totalSum = list.reduce(
//   //     (acc: number, curr: CartItemTyping) => {
//   //       const currentTotal =
//   //         curr.price * curr.quantity;
//   //       acc += currentTotal;
//   //       return acc;
//   //     },
//   //     0
//   //   )
//   // }
//   return {
//     items,
//     cartCount,
//     addProduct,
//     removeProduct,
//     clearProduct,
//     total,
//   }
// }

// export default useCart