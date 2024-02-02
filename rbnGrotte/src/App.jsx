
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {


  return (
<main>
  <Navbar/>
<Outlet/>
</main>

  )
}

export default App
