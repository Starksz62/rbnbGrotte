import { useState } from "react";
import Favoris from "../components/Favoris";
import PanierFavori from "../components/Panierfavori";

function PagesFavoris () {
  const [favorisCount, setFavorisCount] = useState(0);

  const handleFavorisSelectionChange = (count) => {
    setFavorisCount(count);
  };

  return (
    <div className="navbar">
      <Favoris onSelectionChange={handleFavorisSelectionChange} />
      <Favoris onSelectionChange={handleFavorisSelectionChange} />
      <Favoris onSelectionChange={handleFavorisSelectionChange} />
      <Favoris onSelectionChange={handleFavorisSelectionChange} />
      <Favoris onSelectionChange={handleFavorisSelectionChange} />
      <Favoris onSelectionChange={handleFavorisSelectionChange} />
      <PanierFavori count={favorisCount} />
    </div>
  );
}

export default PagesFavoris;
