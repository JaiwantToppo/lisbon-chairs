import { Button } from "../App";
import AddProduct from "./AddProduct";

export default function Products({
  items,
  onShowAddItem,
  onHandleShowAddItem,
  onHandleAddItem,
  onHandleShowProductCart,
  onHandleSelectedProduct,
  onHandleSetCartItems,
}) {
  return (
    <>
      <section>
        <div className="product-list">
          <h2>Our bestselling chairs</h2>
          {onShowAddItem && (
            <AddProduct
              onHandleShowAddItem={onHandleShowAddItem}
              onHandleAddItem={onHandleAddItem}
            />
          )}
          <Button onClick={onHandleShowAddItem} className="add-item">
            ADD ITEM
          </Button>
        </div>

        <div className="grid-3-cols">
          {items.map((item) => (
            <Product
              key={item.id}
              image={item.file}
              name={item.name}
              type={item.type}
              comfort={item.comfort}
              material={item.material}
              weight={item.weight}
              price={item.price}
              item={{ ...item, quantity: 0, checked: false }}
              onHandleShowProductCart={onHandleShowProductCart}
              onHandleSelectedProduct={onHandleSelectedProduct}
              onHandleSetCartItems={onHandleSetCartItems}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Product({
  name,
  image,
  type,
  comfort,
  material,
  weight,
  price,
  item,
  onHandleShowProductCart,
  onHandleSelectedProduct,
  onHandleSetCartItems,
}) {
  return (
    <>
      <figure className="chair">
        <img src={image} alt="Chair" height="180px" />
        <div className="chair-box">
          <h3>{name}</h3>
          <ul className="chair-details">
            <ProductDetails
              svg={
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="chair-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <span>{type}</span>
                </li>
              }
            />
            <ProductDetails
              svg={
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="chair-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{comfort}</span>
                </li>
              }
            />
            <ProductDetails
              svg={
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="chair-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{material}</span>
                </li>
              }
            />
            <ProductDetails
              svg={
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="chair-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span>{weight}</span>
                </li>
              }
            />
          </ul>
          <ProductAddToCart
            onHandleShowProductCart={onHandleShowProductCart}
            price={`${price}€`}
            item={item}
            onHandleSelectedProduct={onHandleSelectedProduct}
            onHandleSetCartItems={onHandleSetCartItems}
          />
        </div>
      </figure>
    </>
  );
}

function ProductDetails({ svg, children }) {
  return (
    <>
      {svg}
      <span>{children}</span>
    </>
  );
}

function ProductAddToCart({
  price,
  item,
  onHandleShowProductCart,
  onHandleSelectedProduct,
  onHandleSetCartItems,
}) {
  return (
    <>
      <div className="chair-price">
        <strong>{price}</strong>
        <Button
          className="btn--small"
          onClick={() => {
            onHandleShowProductCart();
            onHandleSelectedProduct(item);
            onHandleSetCartItems(item);
          }}>
          Add to cart
        </Button>
      </div>
    </>
  );
}
