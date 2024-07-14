/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";



const NavBar=()=> {
  
  const {toggleModal, stateModal, setOpenModal,stateModalCategory,handleOpenCategory}=useContext(GlobalContext);
  const displayForm=(value,setNewValue)=>{
    toggleModal(value,setNewValue);
  } 
  return (
    
      <nav className="flex w-full items-center justify-between p-[20px] lg:px-8 top-0 bg-darkGray" aria-label="Global" >
        <img src="/public/img/LogoMain.png" alt="logo" className="h-10 w-20" />
        <div className="flex flex-row w-full justify-end">
          <a to="/" className="-mx-0.2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-600 ">Home</a>
          <button className="-mx-0.2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-600 " onClick={()=>displayForm(stateModal,setOpenModal)}>New Video</button>
          <button className="-mx-0.2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-600 " onClick={()=>displayForm(stateModalCategory,handleOpenCategory)}>New Category</button>
        </div>
      </nav>
    
   
  )
}


export default NavBar;