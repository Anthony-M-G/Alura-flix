import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [stateModal, setOpenModal] = useState(false);
  const toggleModal=(stateModal)=>{
    setOpenModal(!stateModal)
  }

  return (
    <Router>
      <NavBar handleOpen={toggleModal} stateModal={stateModal} />
      <Routes>
        <Route path="/" element={<Home stateModal={stateModal} handleOpen={toggleModal}/>} />
        <Route path="/new-video" element={this} />
      </Routes>
    </Router>
  )
}

export default App
