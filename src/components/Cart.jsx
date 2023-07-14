import CartDetails from "./cart/CartDetails";

export default function Cart({
  subtotal,
  handleSetSubtotal,
  onToggleItems,
  checkedAll,
  onHandleSetDiscount,
  setDiscountCode,
  discount,
  discountCode,
  cartItems,
  setCartItems,
  onShowProductCart,
  onHandleSetCheckedAll,
  onHandleToggleAllItems,
  onHandleShowProductCart,
  onHandleRemoveCartItems,
  onHandleRemoveAllCartItems,
}) {
  function setQuantity(product, amount) {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                item.quantity + amount < 0
                  ? item.quantity
                  : item.quantity + amount,
            }
          : item
      )
    );
  }

  return (
    <>
      {onShowProductCart && (
        <CartDetails
          subtotal={subtotal}
          handleSetSubtotal={handleSetSubtotal}
          cartItems={cartItems}
          setQuantity={setQuantity}
          onToggleItems={onToggleItems}
          checkedAll={checkedAll}
          onHandleSetDiscount={onHandleSetDiscount}
          setDiscountCode={setDiscountCode}
          discount={discount}
          discountCode={discountCode}
          onHandleSetCheckedAll={onHandleSetCheckedAll}
          onHandleToggleAllItems={onHandleToggleAllItems}
          onHandleShowProductCart={onHandleShowProductCart}
          onHandleRemoveCartItems={onHandleRemoveCartItems}
          onHandleRemoveAllCartItems={onHandleRemoveAllCartItems}
        />
      )}
    </>
  );
}
