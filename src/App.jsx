import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [stateModal, setOpenModal] = useState(false);
  const toggleModal=(stateModal,setNewState)=>{
    setNewState(!stateModal);
  }
  const [stateModalCategory, handleOpenCategory]=useState(stateModal)

  return (
    <Router>
      <NavBar handleOpen={toggleModal} stateModal={stateModal} setOpenModal={setOpenModal} stateModalCategory={stateModalCategory} handleOpenCategory={handleOpenCategory} />
      <Routes>
        <Route path="/" element={<Home stateModal={stateModal} handleOpen={toggleModal} setOpenModal={setOpenModal} stateModalCategory={stateModalCategory} handleOpenCategory={handleOpenCategory} />} />
        <Route path="/new-video" element={this} />
      </Routes>
    </Router>
  )
}

export default App
