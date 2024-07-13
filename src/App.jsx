import NavBar from "./components/NavBar"
import { GlobalContextPrivider } from "./GlobalContext/GlobalContext";
import Home from "./pages/Home";

function App() {
  

  return (
    <>
    <GlobalContextPrivider>

      <NavBar  />
      <Home />
    </GlobalContextPrivider>
    </>  

  )
}

export default App
