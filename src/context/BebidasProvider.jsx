import axios from "axios";
import { createContext, useState } from "react";

const BebidasContext = createContext()

const BebidasProvider =({children})=>{
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [recetaBebida, setRecetaBebida] = useState({})
    const [cargando, setCargando] = useState(false)

    const consultarBebidas = async (datos)=>{
        
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const {data:{drinks}}= await axios(url)
            setBebidas(drinks)
            console.log(drinks)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick=()=>{
        setModal(!modal)
    }

    const consultarBebidasPorId= async(id)=>{
        setCargando(true)
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const {data} = await axios(url)
            setRecetaBebida(data.drinks[0])
            console.log(data.drinks[0])

            

        } catch (error) {
            console.log(error)
        }finally{
            setCargando(false)
        }
       
    }
    return(
        <BebidasContext.Provider value={{
            consultarBebidas,
            bebidas,
            handleModalClick,
            modal,
            consultarBebidasPorId,
            recetaBebida,
            cargando
    
        }}>
                {children}
    
        </BebidasContext.Provider>
    )
   
}

export {

    BebidasProvider
}

export default BebidasContext