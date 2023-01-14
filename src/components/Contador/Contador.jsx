import { useState } from "react";

const Contador = () => {
  const [contador, setearContador] = useState(0);
  const sumarCount = () => {
    setearContador(contador + 1);
  };
  const restarCount = () => {
    setearContador(contador - 1);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button className="btn btn-light" onClick={restarCount}>
            -
          </button>
        </div>
        <div className="col-auto">
          <p>{contador}</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-light" onClick={sumarCount}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;
