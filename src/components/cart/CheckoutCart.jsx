import { useState } from "react";

export default function CheckoutCart({
  subtotal,
  onHandleSetDiscount,
  setDiscountCode,
  discount,
  discountCode,
}) {
  const [buttonText, setButtonText] = useState("Apply");

  function handleClick() {
    setButtonText("Applied");

    setTimeout(() => {
      setButtonText(buttonText);
    }, 1000); // change text after 1 second
  }

  return (
    <>
      <div className="checkout-cart">
        <div className="subtotal">
          <p>Subtotal</p>
          <h3 style={{ marginBottom: "0px" }}>{`${subtotal}€`}</h3>
        </div>
        <hr />
        <div className="discount">
          <form className="discount-form" onSubmit={onHandleSetDiscount}>
            <label>Discount Code</label>
            <div
              className="discount-input-btn"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
              }}>
              <input
                type="text"
                placeholder="Add discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                required
              />
              <button onClick={handleClick}>{buttonText}</button>
            </div>
          </form>
          <p>
            <strong>New customer? </strong>
            <a href="#" style={{ color: "#707070" }}>
              Sign up
            </a>{" "}
            use code: new10
          </p>
          <hr />
        </div>
        <div className="subtotal" style={{ marginBottom: "8px" }}>
          <p>Subtotal</p>
          <h3 style={{ marginBottom: "8px" }}>{`${subtotal}€`}</h3>
        </div>
        <div className="subtotal">
          <p>Discount</p>
          <h3 style={{ marginBottom: "8px" }}>{`-${discount}€`}</h3>
        </div>
        <hr />
        <div className="subtotal" style={{ marginBottom: "8px" }}>
          <p>Grand Total</p>
          <h3 style={{ marginBottom: "8px" }}>{`${subtotal - discount}€`}</h3>
        </div>
        <button style={{ width: "20em" }}>Checkout now</button>
      </div>
    </>
  );
}

CheckoutCart.defaultProps = {
  subtotal: 0,
  discount: 0,
};
