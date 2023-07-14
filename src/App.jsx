import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Section from "./components/Section";
import Testimonial from "./components/Testimonial";

import "./index.css";
import products from "./products";
import Cart from "./components/Cart";

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [showProductCart, setShowProductCart] = useState(false);
  const [items, setItems] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const [subtotal, setSubtotal] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState("");

  function handleShowAddItem() {
    setShowAddItem((show) => !show);
  }

  function handleShowProductCart() {
    setShowProductCart((show) => !show);
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleSelectedProduct(item) {
    setSelectedProduct((curItem) => (curItem?.id === item.id ? null : [item]));
  }

  function handleSetCartItems(item) {
    setCartItems((cartItem) => [...cartItem, item]);
  }

  function handleRemoveCartItems(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
    cartItems.length === 0 ? setSubtotal(cartItems) : setSubtotal(0);
    setDiscount(0);
  }

  function handleRemoveAllCartItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items in Cart?"
    );
    if (confirmed) setCartItems([]);
    setSubtotal(0);
    setDiscount(0);
  }

  function handleSetDiscount(e) {
    e.preventDefault();

    if (!discountCode) return;
    else {
      discountCode.toLocaleLowerCase() === "new10"
        ? setDiscount(subtotal * 0.1)
        : alert("Wrong discount code..");
    }

    //Setting the field back to initial status.
    setDiscountCode("");
  }

  function handleSetCheckedAll() {
    setCheckedAll((check) => !check);
  }

  function handleSetSubtotal(cartItems) {
    setSubtotal(
      cartItems
        .map((item) => (item.checked ? item.price * item.quantity : 0))
        .reduce((acc, total) => acc + total, 0)
    );
  }

  function handleToggleItem(id) {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleToggleAllItems() {
    setCartItems((cartItems) =>
      cartItems.map((item) => ({
        ...item,
        checked: item.checked === checkedAll,
      }))
    );
  }

  const count = cartItems.length;

  return (
    <>
      <div className="container">
        <Navbar
          count={count}
          onShowProductCart={showProductCart}
          onHandleShowProductCart={handleShowProductCart}
        />
        <Header />
        <Section />
        <Testimonial />
        <Products
          items={items}
          selectedProduct={selectedProduct}
          onShowAddItem={showAddItem}
          onHandleShowAddItem={handleShowAddItem}
          onHandleAddItem={handleAddItem}
          onHandleShowProductCart={handleShowProductCart}
          onHandleSelectedProduct={handleSelectedProduct}
          onHandleSetCartItems={handleSetCartItems}
        />
        <Footer />
        <Cart
          subtotal={subtotal}
          handleSetSubtotal={handleSetSubtotal}
          cartItems={cartItems}
          onToggleItems={handleToggleItem}
          checkedAll={checkedAll}
          onHandleSetDiscount={handleSetDiscount}
          setDiscountCode={setDiscountCode}
          discount={discount}
          discountCode={discountCode}
          onHandleSetCheckedAll={handleSetCheckedAll}
          onHandleToggleAllItems={handleToggleAllItems}
          setCartItems={setCartItems}
          onShowProductCart={showProductCart}
          onHandleShowProductCart={handleShowProductCart}
          onHandleRemoveCartItems={handleRemoveCartItems}
          onHandleRemoveAllCartItems={handleRemoveAllCartItems}
        />
        <div className={showAddItem || showProductCart ? "overlay" : ""}></div>
      </div>
    </>
  );
}

export function Button({ className, children, onClick }) {
  return (
    <>
      <button className={`btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
export default App;
