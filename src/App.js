import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="app-main">
        <Navbar />

        <Routes>
          <Route exact path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
