import Input from "../Input/Input"
import Intercambio from "../Intercambio/Intercambio"
import Contador from '../Contador/Contador'
import { useContext } from "react"
import { ContextoGral } from "../../App"



const ItemDetail = ({proDetalle}) => {

  const { saludar } = useContext(ContextoGral)

  console.log(saludar)
  return (
    <>
    <div className="row justify-content-center">
    <div className="col-lg-8 col-md-8 col-sm-12">
    <div className="card product">
    <div className="card-header">
    <h4>{proDetalle.nombre}</h4>
  </div>
  <img className="card-img-top img-prod" src={proDetalle.img} alt={proDetalle.id} />
  <div className="card-body">
    <p>Categoría: {proDetalle.clas} </p>
    <p>Piezas disponibles: {proDetalle.piezas}</p>
    <p>Precio: ${proDetalle.precio} mxn</p>
  </div>
  <div className="card-header">
  <Intercambio /> 
  </div>
</div>
{/*<Input />*/}
</div>
   </div>
</>

  )
}

export default ItemDetail