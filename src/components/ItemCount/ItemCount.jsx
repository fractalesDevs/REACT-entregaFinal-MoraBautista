import { useState } from "react";

import { usarCarritoContexto } from "../../context/CarritoContexto";

const ItemCount = ({ handlerChange, stock = 5, initial = 1, onAdd, id }) => {
  const { handlerStock } = usarCarritoContexto();

  const [contador, setearContador] = useState(initial);
  const handleOnAdd = () => onAdd(contador);

  const sumCount = () => {
    if (contador < stock) {
      setearContador(contador + 1);
    }
  };
  const restCount = () => {
    if (contador > initial) {
      setearContador(contador - 1);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button className="btn btn-light" onClick={restCount}>
            -
          </button>
        </div>
        <div className="col-auto">
          <p>{contador}</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-light" onClick={sumCount}>
            +
          </button>
        </div>
      </div>
      <button
        className="btn btn-outline-success"
        onClick={() => {
          handlerChange(), handleOnAdd(), handlerStock(contador, id);
        }}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
