import React from "react";
import { useState } from "react";

function Products(props) {
  let [products, setProducts] = useState({
    "iphone 14": 1000,
    "iphone 15": 1200,
    "Samsung s23 ultra": 1010,
    "nokia 233": 344,
  });
  let [newProductName, setProductName] = useState();
  let [newProductPrice, setNewProductPrice] = useState();

  function addProduct() {
    console.log(newProductName, newProductPrice);

    let newProduct = { [newProductName]: parseInt(newProductPrice) };

    setProducts((currentProducts) => ({
      ...currentProducts,
      ...newProduct,
    }));
  }
  return (
    <>
      <button onClick={() => setProducts({})}>delete</button>
      {Object.entries(products).map(([phone, price]) => (
        <p>
          {phone}, price: ${price}, with tax ${calculateTax(price, props.tax)}
        </p>
      ))}

      <div>
        <input
          onInput={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="unesite ime proizvoda"
        ></input>
        <input
          onInput={(e) => setNewProductPrice(e.target.value)}
          type="number"
          placeholder="unesite cenu proizvoda"
        ></input>
        <button onClick={addProduct}>add new product</button>
      </div>
    </>
  );
}

function calculateTax(price, tax) {
  return (price * tax) / 100 + price;
}
export default Products;
