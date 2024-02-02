/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Styles/ViewApi.css"
import { Link } from "react-router-dom";
function SelectionGrotte({ data }) {
  const [estFavori, setEstFavori] = useState(false);
    const { valeur, modeDePaiement } = data.prix;
    return (
      <div className="card"> 
        <h2>{data.nom}</h2>
        <p><strong>Prix :</strong> {valeur} {modeDePaiement}</p>
        {/* <p>{data.description}</p> */}
        <div className="images-container">
        <span
  className={`etoile-favori ${estFavori ? "active" : ""}`}
  onClick={() => setEstFavori(!estFavori)}
>
  ★
</span>
        <Link to={`/details/${data.id}`} > 
          <img src={data.images.principale} alt="Photo principale" />
          </Link>
          {/* {data.images.secondaire ? (
            <div className="secondary-images-container">
              {data.images.secondaire.map((photo, index) => (
                
                <img key={index} src={photo} alt={`Photo secondaire ${index + 1}`} />
    
              ))}
            </div>
              ) : */}
       
        </div>
      
       
      </div>
    );
  }
  
  export default SelectionGrotte;