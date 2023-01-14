import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { prodId } = useParams();

  const [proDetalle, setProDetalle] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", prodId);

    getDoc(queryDoc)
      .then((respuesta) =>
        setProDetalle({ id: respuesta.id, ...respuesta.data() })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail key={proDetalle.id} proDetalle={proDetalle} />
    </>
  );
};

export default ItemDetailContainer;
