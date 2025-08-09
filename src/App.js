import "./style.css";
import Products from "./Components/Products";
import { useState } from "react";

function clickOnButton() {
  console.log("works");
}

function App() {
  let [name, setName] = useState("hello world");
  let [tax, setTax] = useState("");
  return (
    <>
      <Products tax={tax} />

      <button onClick={clickOnButton}>{name}</button>
      <input type="text" onInput={(e) => setName(e.target.value)}></input>
      <input
        type="text"
        placeholder="unesite taxu"
        onInput={(e) => setTax(e.target.value)}
      ></input>
    </>
  );
}

export default App;
