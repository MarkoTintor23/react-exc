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
  let [newMessage, setNewMessage] = useState();

  function addProduct() {
    console.log(newProductName, newProductPrice);

    let newProduct = { [newProductName]: parseInt(newProductPrice) };

    setProducts((currentProducts) => ({
      ...currentProducts,
      ...newProduct,
    }));
  }

  function checkApp(e) {
    const searchTerm = e.currentTarget.value.toLowerCase();
    const keys = Object.keys(products);
    for (let key in keys) {
      let keyName = keys[key].toLowerCase();
      if (searchTerm === keyName) {
        setNewMessage("nasli smo proizvod");
        break;
      } else {
        setNewMessage("nismo nasli proizvod");
      }
    }
  }
  return (
    <div>
      <button onClick={() => setProducts({})}>delete</button>
      <div className="d-flex justify-content-center">
        {Object.entries(products).map(([phone, price]) => (
          <div className="m-2">
            <h4>{phone}</h4>
            <p>${calculateTax(price, props.tax)}</p>
          </div>
        ))}
      </div>
      <p>{newMessage}</p>
      <input
        type="text"
        placeholder="Unesite ime proizvoda za proveru"
        onInput={checkApp}
      ></input>
      <div>
        <h3>Dodavanje Proizvoda</h3>
        <div className="mt-2">
          <input
            className="form-control"
            onInput={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="unesite ime proizvoda"
          ></input>
        </div>
        <div className="mt-2">
          <input
            className="form-control"
            onInput={(e) => setNewProductPrice(e.target.value)}
            type="number"
            placeholder="unesite cenu proizvoda"
          ></input>
        </div>
        <button className="btn btn-primary mt-2" onClick={addProduct}>
          add new product
        </button>
      </div>
    </div>
  );
}

function calculateTax(price, tax) {
  return (price * tax) / 100 + price;
}
export default Products;
