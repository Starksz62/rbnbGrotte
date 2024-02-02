import { useState } from "react";
import PropTypes from "prop-types";

import "../Styles/Favoris.css";

function Favoris({ onSelectionChange }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = (cardId) => {
    const isSelected = selectedCards.includes(cardId);
    const updatedSelection = isSelected
      ? selectedCards.filter((id) => id !== cardId)
      : [...selectedCards, cardId];

    setSelectedCards(updatedSelection);
    onSelectionChange(updatedSelection.length);
  };

  const starClassName = (cardId) =>
    selectedCards.includes(cardId) ? "star filled" : "star";

  return (
    <div>
      <div>
        <span
          className={starClassName("card1")}
          role="img"
          aria-label="star"
          onClick={() => handleClick("card1")}
        >
        </span>
      </div>
    </div>
  );
}

Favoris.propTypes = {
  onSelectionChange: PropTypes.func.isRequired,
};

export default Favoris;





