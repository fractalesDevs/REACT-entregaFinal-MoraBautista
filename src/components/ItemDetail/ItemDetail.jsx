import { useEffect, useState } from "react";

import { usarCarritoContexto } from "../../context/CarritoContexto";
import Intercambio from "../Intercambio/Intercambio";

const ItemDetail = ({ proDetalle }) => {
  const { stockRestar, listaCarrito } = usarCarritoContexto();
  const piezasIniciales = parseInt(proDetalle.piezas);
  const [stockFinal, setStockFinal] = useState(piezasIniciales);
  const productoCoincide = listaCarrito.find(
    (item) => item.id === proDetalle.id
  );

  let resta = stockFinal - stockRestar;
  useEffect(() => {
    productoCoincide && setStockFinal(resta);
  }, [stockRestar]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="card product">
            <div className="card-header">
              <h4>{proDetalle.nombre}</h4>
            </div>
            <img
              className="card-img-top img-prod"
              src={proDetalle.img}
              alt={proDetalle.id}
            />
            <div className="card-body">
              <p>Categoría: {proDetalle.clas} </p>
              <p className={stockFinal ? "btn btn-dark" : "btn btn-danger"}>
                Piezas disponibles: {stockFinal}
              </p>
              <p>Precio: ${proDetalle.precio} mxn</p>
            </div>
            <div className="card-header">
              <Intercambio proDetalle={proDetalle} stockFinal={stockFinal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
