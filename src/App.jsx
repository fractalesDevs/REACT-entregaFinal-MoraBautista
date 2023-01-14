import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./views/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer";
import CarritoContainer from "./views/CarritoContainer";
import { CarritoContextoProvider } from "./context/CarritoContexto";

import "./App.css";

function App() {
  return (
    <CarritoContextoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CarritoContainer />} />
          <Route path="/categoria/:catId" element={<ItemListContainer />} />
          <Route path="/detalle/:prodId" element={<ItemDetailContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CarritoContextoProvider>
  );
}

export default App;
