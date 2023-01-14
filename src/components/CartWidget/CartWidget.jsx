import { Link } from "react-router-dom";

import Carrito from "../../assets/carrito.svg";
import { usarCarritoContexto } from "../../context/CarritoContexto";

import "./CartWidget.css";

const CartWidget = () => {
  const { itemsTotales } = usarCarritoContexto();
  return (
    <div id="carritoCompras">
      <Link to="/carrito">
        <img id="carrito" src={Carrito} />
      </Link>
      <span className="numArticulos">{itemsTotales}</span>
    </div>
  );
};

export default CartWidget;
