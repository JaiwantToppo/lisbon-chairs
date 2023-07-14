import { useState } from "react";
import { Button } from "../App";

export default function AddProduct({ onHandleShowAddItem, onHandleAddItem }) {
  const [id, setId] = useState(crypto.randomUUID().slice(2, 8));
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [comfort, setComfort] = useState("");
  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [buttonText, setButtonText] = useState("Add Item");

  function handleSetFile(e) {
    setFile(e.target.files[0].name);
  }

  function handleClick() {
    setButtonText("Item Added");

    setTimeout(() => {
      setButtonText(buttonText);
    }, 1000); // change text after 1 second
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id,
      file,
      name,
      type,
      comfort,
      material,
      weight,
      price,
    };

    onHandleAddItem(newItem);

    // Reset
    setId("");
    setFile();
    setName("");
    setType("");
    setComfort("");
    setMaterial("");
    setWeight("");
    setPrice("");

    setButtonText("Item Added");
  }

  return (
    <>
      <div className="add-product">
        <button className="btn--close-modal" onClick={onHandleShowAddItem}>
          &times;
        </button>
        <h2 className="add-product-header">Add a new product</h2>
        <form className="add-product-form" onSubmit={handleSubmit}>
          <label>Product ID</label>
          <input type="text" disabled value={id} required />
          <label>Image name</label>
          <input type="file" onChange={handleSetFile} required />
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
          <label>Comfort</label>
          <input
            type="text"
            value={comfort}
            onChange={(e) => setComfort(e.target.value)}
            required
          />
          <label>Material</label>
          <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          />
          <label>Weight</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
          <Button onClick={handleClick}>{buttonText}</Button>
        </form>
      </div>
    </>
  );
}
