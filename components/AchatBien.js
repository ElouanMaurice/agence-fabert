import styles from '../styles/AchatBien.module.css';
import React from "react";


const AchatBien = ({ property }) => {
  return (
    <div className={styles.propertyCard}> {/* Utilise le module CSS ici */}
      <img className={styles.image} src={property.image} alt={property.title} />
      <div className={styles.propertyCardInfo}> {/* Utilise aussi ici */}
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p>{property.price}€</p>
        <button className={styles.button}>Voir Détails</button> {/* Applique la classe bouton */}
      </div>
    </div>
  );
};

export default AchatBien;