import { useEffect } from "react"

const Input = () => {

/*
useEffect(()=>{
    window.addEventListener('keydown', inputHandler)

    return () => {
        window.removeEventListener('keydown', inputHandler)
    }
})
*/


    const inputHandler = (event) =>{
        if(
            event.key === 'a' ||
            event.key === 'e' ||
            event.key === 'i' ||
            event.key === 'o' ||
            event.key === 'u'
            ) {
            event.preventDefault()
        }else{

            console.log(event.key)
}       

    }

  return (
    <>
    <div className="box">
        <div className="border-1">
            <input
            //onClick={ inputHandler }
            onKeyDown={ inputHandler }
            type="text"
            name="dato"
            id="dato-01"
            />
        </div>
    </div>
    </>
  )
}

export default Input