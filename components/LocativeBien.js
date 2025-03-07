import styles from '../styles/LocativeBien.module.css';
import React from "react";
import Link from "next/link";


const LocativeBien = ({ location }) => {
  return (
    <div className={styles.propertyCard}> {/* Utilise le module CSS ici */}
    <img className={styles.image} src={location.image} alt={location.title} /> {/* Utilise le titre ou nom du bien */}
    <div className={styles.propertyCardInfo}>
    <h3>{location.titre}</h3> {/* Le titre ou nom du bien */}
    <h6> {location.location}</h6>
    <p>{location.description}</p> {/* Localisation de la location */}
    <p>Loyer mensuel : {location.prix}€/mois</p> {/* Prix annuel pour la location */}
    <Link href={`/locativedetail/${location.id}`}>
        <button className={styles.button}>Voir Détails</button>
      </Link>
    </div>

    </div>
  );
};

export default LocativeBien;
