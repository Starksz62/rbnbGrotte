import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import logo from '../assets/logo.png';
import PanierFavori from '../components/PanierFavori';
import Favoris from '../Pages/Favoris';
import { PanierFavorisProvider, usePanierFavoris } from '../context/PanierContext';

function Navbar() {
  const [circleStyle, setCircleStyle] = useState({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s',
  });

  const changeColor = () => {
    setCircleStyle({
      ...circleStyle,
      backgroundColor: 'red',
    });
  };

  const resetColor = () => {
    setCircleStyle({
      ...circleStyle,
      backgroundColor: 'white',
    });
  };

  const { favorisCount, handleFavorisChange } = usePanierFavoris();

  const handleFavorisSelectionChange = (count) => {
    setFavorisCount(count);
  };


  return (
    <PanierFavorisProvider>
      <div className="navbar">
        <div className="left-section">
          <a href="/">
            <img src={logo} alt="Logo de votre site" />
          </a>
        </div>
        <div className="right-section">
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/favoris">Favoris</Link>
              </li>
              <li>
                <Link to="/AddCave">AddCave</Link>
              </li>
            </ul>
          </nav>
          <div className="panier-favoris">
            <Link to="/favoris">
              <div
                className="circle"
                style={circleStyle}
                onMouseEnter={changeColor}
                onMouseLeave={resetColor}
              >
                <PanierFavori count={favorisCount} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </PanierFavorisProvider>
  );
}

export default Navbar;
