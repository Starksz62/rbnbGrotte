import "../Styles/PanierFavori.css";
import { FaShoppingCart } from "react-icons/fa";

function PanierFavori({ count }) {
  return (
    <div className="panier-favori">
      <FaShoppingCart />
      <span className="count">{count}</span>
    </div>
  );
}

export default PanierFavori;

