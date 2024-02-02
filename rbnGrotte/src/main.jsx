
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Details  from './Pages/Details.jsx';
import Favoris from './Pages/Favoris.jsx';
import AddCave from './Pages/AddCave.jsx';
import App from './App.jsx'
import './index.css'
import SelectionGrotte from './Components/SelectionGrotte.jsx';

import { PanierFavorisProvider } from './context/PanierContext.jsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/details/:id",
        element:<Details/>
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <PanierFavorisProvider>
    <RouterProvider router={router} />
  </PanierFavorisProvider>
);
