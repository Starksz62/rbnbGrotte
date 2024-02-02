import { useEffect, useState } from 'react';

import "./Filter.css"

import PictoTente from "../assets/PictoTente.png";
import PictoGrotte from "../assets/PictoGrotte.png";
import PictoPiscine from "../assets/PictoPiscine.png";
import PictoCascade from "../assets/PictoCascade.png";
import PictoFeu from "../assets/PictoFeu.png";
import PictoAnimaux from "../assets/PictoAnimaux.png";

function Filter() {
  const [Filter, setFiltre] = useState();

  useEffect(() => {
    fetch("http://localhost:4875/cave/all")
      .then((res) => res.json())
      .then((data) => {
        setFiltre(data);
        console.info(data);
      })
      .catch((error) => console.info(error));
    }, []);

  const handleFilterClick = (filterName) => {
    setFiltre(filterName);
  };

  return (
    <>
    <section className="filtreLogo">
      <button className='buttonImg'>
      <img className="imgFiltre" src={PictoTente} alt="Pictogramme Tente" onClick={handleFilterClick} />
        <h4 className='titleImg'>Tente</h4>
      </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoGrotte} alt="Pictogramme Grotte" onClick={handleFilterClick} />
        <h4 className='titleImg'>Grotte</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoPiscine} alt="Pictogramme Piscine" onClick={handleFilterClick} />
        <h4 className='titleImg'>Piscine</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoCascade} alt="Pictogramme Cascade" onClick={handleFilterClick} />
        <h4 className='titleImg'>Cascade</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoFeu} alt="Pictogramme Feu" onClick={handleFilterClick} />
        <h4 className='titleImg'>Feu</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoAnimaux} alt="Pictogramme Animaux" onClick={handleFilterClick} />
        <h4 className='titleImg'>Animaux</h4>
        </button>
    </section>
    </>
  )
}

export default Filter;
