import { useContext } from "react";
import { useState, createContext } from "react";

const CarritoContexto = createContext([]);

export const usarCarritoContexto = () => useContext(CarritoContexto);

export const CarritoContextoProvider = ({ children }) => {
  //Todo lo que queramos pasars y usarssss
  const [listaCarrito, setListaCarrito] = useState([]);

  const agregaCarrito = (producto) => {
    const ProdExiste = listaCarrito.find((item) => item.id === producto.id);
    if (ProdExiste) {
      setListaCarrito(
        listaCarrito.map((item) =>
          item.id === producto.id
            ? {
                ...ProdExiste,
                cantidad: ProdExiste.cantidad + producto.cantidad,
              }
            : item
        )
      );
    } else {
      setListaCarrito([...listaCarrito, producto]);
    }
  };

  //vaciado de carrito
  const vaciarCarro = () => setListaCarrito([]);

  //Cantidad Total
  const [itemsTotales, setItemsTotales] = useState(0);
  const colocarItems = (items) => {
    parseInt(items);
    setItemsTotales(itemsTotales + items);
  };
  //Restar items
  const restarItem = (items) => {
    parseInt(items);
    setItemsTotales(itemsTotales - items);
  };
  //Reset cantidad total
  const reseteoCantidad = () => setItemsTotales(0);

  //Precio total
  const [precioTotal, setPrecioTotal] = useState(0);
  const sumarPrecio = (precios, cantidad) => {
    parseInt(precios);
    parseInt(cantidad);
    let totalSumado = precios * cantidad;
    setPrecioTotal(precioTotal + totalSumado);
  };
  const restarPrecio = (precios, cantidad) => {
    parseInt(precios);
    parseInt(cantidad);
    let totalRestado = precios * cantidad;
    setPrecioTotal(precioTotal - totalRestado);
  };
  const vaciarPrecio = () => {
    setPrecioTotal(0);
  };

  //ELiminar item
  const eliminarItem = (prodElimina) =>
    setListaCarrito(listaCarrito.filter((it) => it.id !== prodElimina.id));

  //para restar a stock
  const [stockRestar, setStockRestar] = useState(0);
  const handlerStock = (contador) => {
    setStockRestar(parseInt(contador));
  };
  //Actualizar stockGlobal
  const [stockGlobal, setStockGlobal] = useState();
  const actStockGlobal = (stockFinal) => {
    setStockGlobal(stockFinal);
  };

  return (
    <CarritoContexto.Provider
      value={{
        listaCarrito,
        agregaCarrito,
        vaciarCarro,
        itemsTotales,
        colocarItems,
        reseteoCantidad,
        eliminarItem,
        restarItem,
        precioTotal,
        sumarPrecio,
        restarPrecio,
        vaciarPrecio,
        handlerStock,
        stockRestar,
        stockGlobal,
        actStockGlobal,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};
