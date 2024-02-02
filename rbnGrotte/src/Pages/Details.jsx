import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/Detail.css"
function Details() {
  const [cave, setCave] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4875/cave/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCave(data);
      });
  }, [id]);

  if (cave === null) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div>
      {cave ? (
        <div>
          <p>{cave.nom}</p>
          <div className="photo-details">
          <div className="principal-information">
          {cave.images && cave.images.principale && (
            <img src={cave.images.principale} alt="Photo principale" />
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
<div className="container-information">
      {cave &&
        cave.avis &&
        cave.avis.length > 0 && (
          <div className="avis-user">
            <h3>Avis des utilisateurs :</h3>
            <ul>
              {cave.avis.map((avis, index) => (
                <li key={index}>
                    {avis.utilisateur}<br />
                  <strong>Note :</strong> {avis.note}<br />
                  <strong>Commentaire :</strong> {avis.commentaire}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="donnees-information">
        <p>Type: {cave.type}</p>
          <p>Prix: {cave.prix.valeur} {cave.prix.modeDePaiement}</p>
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
         </div>
        </div>
  );
}

export default Details;
