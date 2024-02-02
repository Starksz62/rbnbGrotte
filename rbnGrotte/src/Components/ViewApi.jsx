import { useState, useEffect } from 'react';
import '../Styles/ViewApi.css';

function ViewApi() {
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
      <h1>Liste des grottes</h1>
      {data ? (
        <div className="card-container">
          {data.grottes.map(grotte => (
            <div className="card" key={grotte.id}>
              <h2>{grotte.nom}</h2>
              <p><strong>Prix :</strong> {grotte.prix.valeur} {grotte.prix.modeDePaiement}</p>
              <p>{grotte.description}</p>
              <div className="images-container">
                <img src={grotte.images.principale} alt="Photo principale" />
                {grotte.images.secondaire ? (
                  <div className="secondary-images-container">
                    {grotte.images.secondaire.map((image, index) => (
                      <img key={index} src={image} alt={`Photo secondaire ${index + 1}`} />
                    ))}
                  </div>
                ) : (
                  <p>Pas de photos secondaires disponibles</p>
                )}
              </div>
              <h3>Avis des utilisateurs :</h3>
              <ul>
                {grotte.avis.map((avis, index) => (
                  <li key={index}>
                    <strong>Utilisateur :</strong> {avis.utilisateur}<br />
                    <strong>Note :</strong> {avis.note}<br />
                    <strong>Commentaire :</strong> {avis.commentaire}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default ViewApi;


