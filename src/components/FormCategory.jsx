/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";


const FormCategory=()=>{
    const [enable,setEnable]=useState(false)
    
    const [category,setNewCategory]=useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!categories.includes(category)){
        setCategory([...categories,category])
        handleOpenCategory(!stateModalCategory)
    }
    else setEnable(true);
  }
  const {categories,stateModalCategory,handleOpenCategory,setCategory}=useContext(GlobalContext);
    if(!stateModalCategory) return null;
    return(
        
        <section aria-labelledby="add-category-title" className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen">
    <div aria-hidden="true" className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true">
      <header className="px-4 py-5 sm:px-6">
        <h2 id="add-category-title" className="text-lg leading-6 font-medium text-gray-900">Agregar Nueva Categoría</h2>
      </header>
      <form className="px-4 py-5 sm:px-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Nombre de la Categoría:</label>
          <input type="text" id="category" name="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={category} onChange={(e) => setNewCategory(e.target.value)} required />
            {enable && <p>Categoría ya listada</p>}
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleOpenCategory(!stateModalCategory)}>
            Cancelar
          </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Agregar Categoría
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
    )
}

export default FormCategory;