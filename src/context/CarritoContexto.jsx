import { createContext, useState } from "react";

export const CarritoContexto = createContext( [] )


export const CarritoContextoProvider = ( {children} ) => {
   
     //Todo lo que queramos pasars y usarssss
     const carritoLista='Testsss'
     const contador='10'

    return(
<CarritoContexto.Provider value={
    {
    carritoLista,
    contador
    } 
}>
{children}
    </CarritoContexto.Provider>
    )
}