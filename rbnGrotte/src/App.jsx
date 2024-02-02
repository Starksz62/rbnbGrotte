
import ViewApi from "./Components/ViewApi"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
    <ViewApi />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App;
