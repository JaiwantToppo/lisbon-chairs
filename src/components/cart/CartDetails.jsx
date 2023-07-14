import CheckoutCart from "./CheckoutCart";

export default function CartDetails({
  subtotal,
  handleSetSubtotal,
  cartItems,
  setQuantity,
  onToggleItems,
  checkedAll,
  onHandleSetDiscount,
  setDiscountCode,
  discount,
  discountCode,
  onHandleSetCheckedAll,
  onHandleToggleAllItems,
  onHandleShowProductCart,
  onHandleRemoveCartItems,
  onHandleRemoveAllCartItems,
}) {
  return (
    <>
      <div className="cart">
        <button className="btn--close-cart" onClick={onHandleShowProductCart}>
          &times;
        </button>
        <div className="cart-header">
          <div
            className="cart-header-items"
            onClick={onHandleRemoveAllCartItems}>
            <h1>Cart</h1>
            <RemoveItem></RemoveItem>
          </div>
          <div className="cart-header-text">
            <input
              type="checkbox"
              value={checkedAll}
              className="checkbox header-checkbox-all"
              onChange={() => {
                onHandleSetCheckedAll && onHandleToggleAllItems();
              }}
            />
            <p className="product-header-text">PRODUCT</p>
            <p className="quantity-header-text">QUANTITY</p>
            <p className="price-header-text">PRICE</p>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItems={cartItems}
              item={item}
              onToggleItems={onToggleItems}
              setQuantity={setQuantity}
              handleSetSubtotal={handleSetSubtotal}
              onHandleRemoveCartItems={onHandleRemoveCartItems}
            />
          ))}
        </div>
        <CheckoutCart
          subtotal={subtotal}
          onHandleSetDiscount={onHandleSetDiscount}
          setDiscountCode={setDiscountCode}
          discount={discount}
          discountCode={discountCode}
        />
      </div>
      <div className="overlay hidden"></div>
    </>
  );
}

function CartItem({
  item,
  cartItems,
  setQuantity,
  onToggleItems,
  handleSetSubtotal,
  onHandleRemoveCartItems,
}) {
  return (
    <>
      <div className="hr">
        <hr />
      </div>
      <div className="product">
        <CheckBox
          item={item}
          checked={item.checked}
          onToggleItems={onToggleItems}></CheckBox>
        <div className="product-details">
          <img className="cart-product-img" src={item.file} />
          <div className="cart-product-text">
            <h3 className="cart-product-name">{item.name}</h3>
            <p>Material | {item.material}</p>
          </div>
        </div>
        <div className="product-quantity">
          <div className="set-quantity">
            <button
              onClick={() => {
                setQuantity(item, -1);
              }}>
              -
            </button>
            <p>{item.quantity}</p>
            <button
              onClick={() => {
                setQuantity(item, 1);
              }}>
              +
            </button>
          </div>
          <RemoveItem
            item={item}
            onHandleRemoveCartItems={onHandleRemoveCartItems}></RemoveItem>
        </div>
        <div className="product-price">
          <h3>
            {item.checked && handleSetSubtotal(cartItems)}{" "}
            {item.price * item.quantity}€
          </h3>
        </div>
      </div>
    </>
  );
}

function CheckBox({ className, onToggleItems, item, checked }) {
  return (
    <>
      <input
        className={`checkbox ${className}`}
        type="checkbox"
        checked={checked}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
    </>
  );
}

function RemoveItem({ item, onHandleRemoveCartItems }) {
  return (
    <>
      <div
        className="remove-all-icon"
        onClick={() => onHandleRemoveCartItems(item.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        <p>Remove</p>
      </div>
    </>
  );
}
