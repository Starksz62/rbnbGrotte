
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Détails  from './Pages/Détails.jsx';
import Favoris from './Pages/Favoris.jsx';
import AddCave from './Pages/AddCave.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/détails",
        element:<Détails/>
      },
      {
        path:"/favoris",
        element:<Favoris/>
      },
      {
        path:"/AddCave",
        element:<AddCave/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
