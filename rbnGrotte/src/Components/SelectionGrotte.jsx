import { useState } from "react";
import "../Styles/ViewApi.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider"; // Importez le composant ImageSlider ici

import Favoris from "../Pages/Favoris";
import { FaShoppingCart } from "react-icons/fa";
import PanierFavori from "./PanierFavori";

function SelectionGrotte({ data }) {
  const { valeur, modeDePaiement } = data.prix;
  const [favorisCount, setFavorisCount] = useState(0);

  const handleFavorisSelectionChange = (count) => {
    setFavorisCount(count);
  };

  return (
    <div className="card">
      <div className="container-favori-title">
        <h2>{data.nom}</h2>
        <Favoris onSelectionChange={handleFavorisSelectionChange} />
      </div>
      <p>
        <strong>Prix :</strong> {valeur} {modeDePaiement}
      </p>
      <Link to={`/details/${data.id}`}>
        <ImageSlider
          images={[data.images.principale, ...data.images.secondaire]}
        />
      </Link>
    </div>
  );
}


export default SelectionGrotte;
