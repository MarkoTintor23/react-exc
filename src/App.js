import "./style.css";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <Products tax="20" />
      <Products tax="25" />
      <Products tax="60" />
    </>
  );
}

export default App;
