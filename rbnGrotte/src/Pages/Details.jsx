import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../Styles/Detail.css";
import "react-calendar/dist/Calendar.css";

function Details() {
  const [cave, setCave] = useState(null);
  const { id } = useParams();
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  useEffect(() => {
    fetch(`http://localhost:4875/cave/${id}`)
      .then((res) => {
        if (!res.ok) { // Vérifie si la réponse est ok (status 200-299)
          throw new Error(`Erreur HTTP! statut: ${res.status}`);
        }
        return res.json(); // Tente de parser la réponse en JSON
      })
      .then((data) => {
        setCave(data); // Met à jour l'état avec les données récupérées
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de la cave:", error);
        // Ici, vous pourriez définir un état d'erreur et l'afficher à l'utilisateur, si souhaité
      });
  }, [id]);

  const handleDateChange = (date) => {
    setDateRange(date);
  };

  function calculateDateRangeDuration(dateRange) {
    if (dateRange[0] && dateRange[1]) {
      const durationInMilliseconds = dateRange[1] - dateRange[0];
      const durationInDays = durationInMilliseconds / (1000 * 3600 * 24);
      return Math.ceil(durationInDays);
    }
    return 0;
  }
  
  function calculateTotalPrice(duration, pricePerDay) {
    if (duration > 0 && pricePerDay) {
      return duration * pricePerDay;
    }
    return 0;
  }

  if (cave === null) {
    return <p>Chargement en cours...</p>;
  }

  const duration = calculateDateRangeDuration(dateRange);
  const totalPrice = calculateTotalPrice(duration, cave.prix.valeur);
  return (
    <div>
      {cave ? (
        <div>
          <p className="daleked" id="title">{cave.nom}</p>
          <div className="photo-details">
            <div className="principal-information">
              {cave.images && cave.images.principale && (
                <img src={cave.images.principale} alt="Photo principale" className="principal-image" />
              )}
            </div>
            {cave.images &&
              cave.images.secondaire &&
              cave.images.secondaire.length > 0 && (
                <div>
                  <div className="secondary-images-container">
                    
                    {cave.images.secondaire.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Photo secondaire ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}

      <div className="description"> {cave && cave.description}</div>
      <div className="container-calendar-information">
        <div className="donnees-information">
          <p>Type: {cave.type}</p>
      
          <p>Prix: {totalPrice > 0 ? `${totalPrice} ${cave.prix.modeDePaiement}` : `${cave.prix.valeur} ${cave.prix.modeDePaiement}`}</p>
          <p>Note: {cave.note}</p>

          {cave.eau.coinEau ? (
            <p>Coin Eau disponible</p>
          ) : (
            <p>Pas de Coin Eau disponible</p>
          )}

          {cave.eau.cascade ? (
            <p>Cascade disponible</p>
          ) : (
            <p>Pas de Cascade disponible</p>
          )}
        </div>
        <div className="calendar">
          <Calendar
            onChange={handleDateChange}
            selectRange={true}
            value={dateRange}
          />
        </div>
      </div>
      <div className="container-information">
        {cave && cave.avis && cave.avis.length > 0 && (
          <div className="avis-user">
            <h3 className="daleked">Avis des utilisateurs :</h3>
            <ul>
              {cave.avis.map((avis, index) => (
                <li key={index}>
                  {avis.utilisateur}
                  <br />
                  <strong>Note :</strong> {avis.note}
                  <br />
                  <strong>Commentaire :</strong> {avis.commentaire}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
