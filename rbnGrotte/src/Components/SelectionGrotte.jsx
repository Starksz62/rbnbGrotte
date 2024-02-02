import { useState } from "react";
import "../Styles/ViewApi.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider"; // Importez le composant ImageSlider ici

function SelectionGrotte({ data }) {
  const [estFavori, setEstFavori] = useState(false);
  const { valeur, modeDePaiement } = data.prix;

  return (
    <div className="card">
      <div className="container-favori-title">
      <h2>{data.nom}</h2>
      <span
        className={`etoile-favori ${estFavori ? "active" : ""}`}
        onClick={() => setEstFavori(!estFavori)}
      >
        ★
      </span>
      </div>
      <p>
        <strong>Prix :</strong> {valeur} {modeDePaiement}
      </p>
      <Link to={`/details/${data.id}`}>
        <ImageSlider images={[data.images.principale, ...data.images.secondaire]} />
      </Link>
    </div>
  );
}

export default SelectionGrotte;
