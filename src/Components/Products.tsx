import React from "react";

interface ProductInterface {
  [key: string]: number;
}

const products: ProductInterface = {
  "iphone 14": 1000,
  "iphone 15": 1200,
  "Samsung s23 ultra": 1010,
};

function Products(props) {
  return (
    <>
      {Object.entries(products).map(([phone, price]) => (
        <p>
          {phone}, price: ${price}, with tax{calculateTax(price, props.tax)}
        </p>
      ))}
    </>
  );
}

function calculateTax(price: number, tax: number): number {
  return (price * tax) / 100 + price;
}
export default Products;
