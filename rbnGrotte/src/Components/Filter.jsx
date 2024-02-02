import "./Filter.css"

import PictoHutte from "../assets/PictoTente.png";
import PictoGrotte from "../assets/PictoGrotte.png";
import PictoPiscine from "../assets/PictoPiscine.png";
import PictoCascade from "../assets/PictoCascade.png";
import PictoFeu from "../assets/PictoFeu.png";
import PictoAnimaux from "../assets/PictoAnimaux.png";

function Filter({ handleFilterClick, handleFilterClickPiscine }){

  return (
    <>
    <section className="filtreLogo">
      <button className='buttonImg'onClick={() => handleFilterClick("hutte")} >
      <img className="imgFiltre" src={PictoHutte} alt="Pictogramme Hutte" />
        <h4 className='titleImg'>Hutte</h4>
      </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoGrotte} alt="Pictogramme Grotte" onClick={() => handleFilterClick("grotte")} />
        <h4 className='titleImg'>Grotte</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoPiscine} alt="Pictogramme Piscine" onClick={() => handleFilterClickPiscine("piscine")} />
        <h4 className='titleImg'>Piscine</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoCascade} alt="Pictogramme Cascade" onClick={() => handleFilterClick("Cascade")} />
        <h4 className='titleImg'>Cascade</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoFeu} alt="Pictogramme Feu" onClick={() => handleFilterClick("Feu")} />
        <h4 className='titleImg'>Feu</h4>
        </button>
        <button className='buttonImg'>
        <img className="imgFiltre" src={PictoAnimaux} alt="Pictogramme Animaux" onClick={() => handleFilterClick("Animaux")} />
        <h4 className='titleImg'>Animaux</h4>
        </button>
    </section>
    </>
  )
}

export default Filter;