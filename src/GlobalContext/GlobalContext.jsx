/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const GlobalContext=createContext()

const GlobalContextPrivider=({children})=>{
  const [stateModal, setOpenModal] = useState(false);
  const toggleModal=(stateModal,setNewState)=>{
    setNewState(!stateModal);
  }
  const [stateModalCategory, handleOpenCategory]=useState(stateModal)
    const [categories,setCategory]=useState(["Programación", "Tecnología", "Noticias tech"]);
  
    
    return (
        <GlobalContext.Provider value={{stateModal,setOpenModal,toggleModal,stateModalCategory,handleOpenCategory,categories,setCategory}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext,GlobalContextPrivider};