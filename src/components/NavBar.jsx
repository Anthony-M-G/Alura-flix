/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


const NavBar=({handleOpen, stateModal, setOpenModal,stateModalCategory,handleOpenCategory})=> {
  const displayForm=(value,setNewValue)=>{
    handleOpen(value,setNewValue);
  }
  return (
    
      <nav className="flex w-full items-center justify-between p-[20px] lg:px-8 top-0 bg-darkGray" aria-label="Global" >
        <img src="/public/imgs/logo.png" alt="logo" className="h-10 w-20" />
        <div className="flex flex-row w-full justify-end">
          <Link to="/" className="-mx-0.2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-600 ">Home</Link>
          <button className="-mx-0.2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-600 " onClick={()=>displayForm(stateModal,setOpenModal)}>New Video</button>
          <button className="-mx-0.2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-600 " onClick={()=>displayForm(stateModalCategory,handleOpenCategory)}>New Category</button>
        </div>
      </nav>
    
   
  )
}


export default NavBar;