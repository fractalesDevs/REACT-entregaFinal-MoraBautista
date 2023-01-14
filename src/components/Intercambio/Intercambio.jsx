import { useState } from "react";

import { usarCarritoContexto } from "../../context/CarritoContexto";
import BotonCart from "../BotonCart/BotonCart";
import ItemCount from "../ItemCount/ItemCount";

const Intercambio = ({ proDetalle, stockFinal }) => {
  const { agregaCarrito, colocarItems, sumarPrecio } = usarCarritoContexto();

  const [inputTipo, setInputTipo] = useState("button");

  const handlerChange = () => {
    setInputTipo("input");
  };
  const onAdd = (cantidad) => {
    agregaCarrito({ ...proDetalle, cantidad });
    colocarItems(cantidad);
    sumarPrecio(proDetalle.precio, cantidad);
  };

  return (
    <>
      <div className="row justify-content-center">
        {inputTipo === "button" ? (
          <ItemCount
            handlerChange={handlerChange}
            initial={1}
            stock={stockFinal}
            onAdd={onAdd}
            id={proDetalle.id}
          />
        ) : (
          <BotonCart />
        )}
      </div>
    </>
  );
};

export default Intercambio;
