/* eslint-disable react/prop-types */

import { useState } from 'react';


const Form = ( props ) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const {isOpen, handleOpen,categories,videos,setVideo,setOpenModal} = props;
  
    
    const handleSubmit = (e) => {
    e.preventDefault();
    const id=videos.length+1
    // Aquí puedes manejar el envío del formulario
    setVideo([...videos,{id: id,title,url,description,category}])
    handleOpen(isOpen,setOpenModal);
  };

  if (!isOpen) return null;

  return (
    <section aria-labelledby="add-video-title" className="fixed z-10 inset-0 overflow-y-auto ">
  <div className="flex items-center justify-center min-h-screen ">
    <div aria-hidden="true" className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true">
      <header className="px-4 py-5 sm:px-6">
        <h2 id="add-video-title" className="text-lg leading-6 font-medium text-gray-900">Agregar Nuevo Video</h2>
      </header>
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
            {categories.map((category, index) => (
              <option key={`cat-${category}-${index}`} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleOpen(isOpen,setOpenModal)}>
            Cancelar
          </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Agregar Video
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
  );
};

export default Form;
