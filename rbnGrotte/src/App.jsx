import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from './Components/Navbar'


function App() {
  return (
    <>
    <main>
      <Navbar />
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App;
