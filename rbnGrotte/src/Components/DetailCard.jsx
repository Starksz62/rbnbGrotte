import { useState, useEffect } from 'react';
import '../Styles/DetailCard.css';

function DetailCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4875/cave/all')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div className="card-container">
          <div className="card" key={data.grottes[0].id}>
            <h2>{data.grottes[0].nom}</h2>
            <p><strong>Prix :</strong> {data.grottes[0].prix.valeur} {data.grottes[0].prix.modeDePaiement}</p>
            <p>{data.grottes[0].description}</p>
            <div className="images-container">
              <img src={data.grottes[0].images.principale} alt="Photo principale" />
              {data.grottes[0].images.secondaire ? (
                <div className="secondary-images-container">
                  {data.grottes[0].images.secondaire.map((image, index) => (
                    <img key={index} src={image} alt={`Photo secondaire ${index + 1}`} />
                  ))}
                </div>
              ) : (
                <p>Pas de photos secondaires disponibles</p>
              )}
            </div>
            <h3>Avis des utilisateurs :</h3>
            <ul>
              {data.grottes[0].avis.map((avis, index) => (
                <li key={index}>
                  <strong>Utilisateur :</strong> {avis.utilisateur}<br />
                  <strong>Note :</strong> {avis.note}<br />
                  <strong>Commentaire :</strong> {avis.commentaire}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default DetailCard;
