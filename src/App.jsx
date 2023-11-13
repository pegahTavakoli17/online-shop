import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./containers/ProductsList";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";
import Successful from "./containers/Successful";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ProductsList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
