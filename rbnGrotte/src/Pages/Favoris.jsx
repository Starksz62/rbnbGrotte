import PropTypes from "prop-types";

import "../Styles/Favoris.css";
import { usePanierFavoris } from "../context/PanierContext";

function Favoris() {
  const { favorisCount, isInFavoris, toggleFavoris } = usePanierFavoris();

  // const handleClick = () => {
  //   handleFavorisChange();
  // };

  // const starClassName = "star";

  return (
    <div>
      <div>
        <span
          className={`star ${isInFavoris ? "yellow" : ""}`}
          role="img"
          aria-label="star"
          onClick={toggleFavoris}
        ></span>
      </div>
    </div>
  );
}

Favoris.propTypes = {
  onSelectionChange: PropTypes.func.isRequired,
};

export default Favoris;





