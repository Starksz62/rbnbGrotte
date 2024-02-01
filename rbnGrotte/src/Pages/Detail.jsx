import { useEffect, useState } from "react";
import noImg from "../Components/noImg.jpg";  // Assurez-vous que le chemin est correct
import "../Styles/Detail.css";

function Detail() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4875/cave/all`)
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        setDetails(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Si details[0] est undefined, on ne rend rien
  if (!details[0]) {
    return null;
  }

  const item = details[0];

  // Fonction pour remplacer les images manquantes par une image interne
  const replaceMissingImages = (photos) => {
    const numberOfImages = 3;

    while (photos.length < numberOfImages) {
      photos.push(noImg);
    }

    return photos;
  };

  // Remplacez les images manquantes
  const imagesFull = replaceMissingImages(item.photos);

  return (
    <div>
      {details && details.map && (
        <div className="detailBody" key={item.id}>
          <div className="detailName">{item.nom}</div>
          <div className="detailImage">
            <ul>
              {imagesFull.map((photo, index) => (
                <li key={index}>
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className={index === 0 ? 'mainPhoto' : 'secondaryPhoto'}
                  />
                  {console.log(`Index: ${index}, className: ${index === 0 ? 'mainPhoto' : 'secondaryPhoto'}`)}
                </li>
              ))}
            </ul>
          </div>
          <div>{item.description}</div>
          <div className="detailReservation">Reservation prix et autre</div>
          <div className="detailAvis">Avis</div>
          <div>Recommandation</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
