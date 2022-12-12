import { Link } from 'react-router-dom';
import Carrito from '../../assets/carrito.svg'
import './CartWidget.css'

const CartWidget = () => {
    let contador = 1;
    return(
        <div id="carritoCompras">
            <Link to='/carrito'>
    <img id="carrito" src={Carrito} />
    </Link>
    <span className="numArticulos">{contador}</span>
    </div>
    )
  };

  export default CartWidget;