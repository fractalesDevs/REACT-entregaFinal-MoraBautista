const CartWidget = () => {
    let contador = 1;
    return(
        <div id="carritoCompras">
    <img id="carrito" src="../public/carrito.svg" />
    <span className="numArticulos">{contador}</span>
    </div>
    )
  };

  export default CartWidget;