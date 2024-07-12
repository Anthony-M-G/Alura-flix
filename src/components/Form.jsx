/* eslint-disable react/prop-types */

import { useState } from 'react';


const Form = ( props ) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const {isOpen, handleOpen,categories,videos,setVideo} = props;
  
    
    const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    setVideo([...videos,{title,url,description,category}])
    handleOpen(isOpen);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Agregar Nuevo Video</h2>
          </div>
          <form className="px-4 py-5 sm:px-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título:</label>
              <input type="text" id="title" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="url" className="block text-gray-700 font-bold mb-2">URL del Video:</label>
              <input type="url" id="url" name="url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={url} onChange={(e) => setUrl(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción:</label>
              <textarea id="description" name="description" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Categoría:</label>
              <select id="category" name="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
                    {
                        categories.map((category,index)=>{
                            return <option key={`cat-${category}-${index}`} value={category}>{category}</option>

                        })
                    }
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>handleOpen(isOpen)}>
                Cancelar
              </button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Agregar Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
