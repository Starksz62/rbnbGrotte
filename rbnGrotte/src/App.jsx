import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from './Components/Navbar'
import './App.css'


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
