import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>🛒 Tienda Online</h1>
      <ProductList />
    </div>
  );
};

export default App;