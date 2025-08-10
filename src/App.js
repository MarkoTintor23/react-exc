import "./style.css";
import Products from "./Components/Products";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [tax, setTax] = useState("");

  return (
    <div className="container">
      <div className="mt-2">
        <input
          className="form-control"
          type="text"
          placeholder="Unesite novu taxu"
          onInput={(e) => setTax(e.target.value)}
        ></input>
      </div>
      <Products tax={tax} />
    </div>
  );
}

export default App;
