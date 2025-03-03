import styles from '../styles/LocativeBien.module.css';
import React from "react";

const LocativeBien = ({ bien }) => {
  return (
    <div className={styles.propertyCard}> {/* Utilise le module CSS ici */}
    <img className={styles.image} src={bien.image} alt={bien.title} /> {/* Utilise le titre ou nom du bien */}
    <div className={styles.propertyCardInfo}>
    <h3>{bien.titre}</h3> {/* Le titre ou nom du bien */}
    <h6> {bien.location}</h6>
    <p>{bien.description}</p> {/* Localisation de la location */}
    <p>Loyer mensuel : {bien.prix}€/mois</p> {/* Prix annuel pour la location */}
    <button className={styles.button}>En savoir plus</button> {/* Bouton pour en savoir plus ou contacter */}
    </div>

    </div>
  );
};

export default LocativeBien;
