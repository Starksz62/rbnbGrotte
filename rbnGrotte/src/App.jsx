import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Filter from "./Components/Filter"

function App() {
  
  return (
<main>
  <Navbar/>
  <Filter/>
<Outlet/>
</main>
  )
}

export default App
