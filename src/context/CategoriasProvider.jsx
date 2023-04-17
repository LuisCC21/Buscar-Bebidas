import axios from "axios";
import { createContext,useEffect, useState } from "react";




const CategoriasContext = createContext()

const CategoriasProvier= ({children})=>{
    const [categorias, setCategorias] = useState([])

    const obtenerBebidas = async()=>{

        try {
            const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const {data}= await axios(url)
    
                setCategorias(data.drinks)
         
        } catch (error) {
            console.log(error)
            
        }
    
    }
    useEffect(()=>{
        obtenerBebidas()
    },[])

    return (
        <CategoriasContext.Provider value={{
            categorias

        }}>
            {children}

        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvier
}

export default CategoriasContext