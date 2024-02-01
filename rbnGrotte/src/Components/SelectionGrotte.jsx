/* eslint-disable react/prop-types */
function SelectionGrotte({ data }) {
    // Extraire les propriétés spécifiques de l'objet prix
    const { categorie, valeur, modeDePaiement } = data.prix;
  
    return (
      <div className="selection-grotte">
        <h2>{data.nom}</h2>
        <p>Catégorie: {categorie}</p>
        <p>Valeur: {valeur}</p>
        <p>Mode de paiement: {modeDePaiement}</p>
        <p>Description: {data.description}</p>
        {data.animaux_interdits && (
          <p>Animaux interdits: {data.animaux_interdits.join(", ")}</p>
        )}
     {data.images && (
        <div className="photos-grotte">
          <img src={data.images.principale} alt={`Photo principale de la grotte`} />
          {data.images.secondaire.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1} de la grotte`} />
          ))}
          </div>
        )}
      </div>
    );
  }
  
  
  export default SelectionGrotte;