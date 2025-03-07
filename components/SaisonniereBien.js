import styles from '../styles/SaisonniereBien.module.css';
import React from "react";
import Link from "next/link";


const SaisonniereBien = ({ saison }) => {
  return (
    <div className={styles.propertyCard}> {/* Utilise le module CSS ici */}
    <img className={styles.image} src={saison.image} alt={saison.title} /> {/* Utilise le titre ou nom du bien */}
    <div className={styles.propertyCardInfo}>
    <h3>{saison.titre}</h3> {/* Le titre ou nom du bien */}
    <h6> {saison.location}</h6>
    <p>{saison.description}</p> {/* Localisation de la location */}
    <p>Loyer mensuel : {saison.prix}€/mois</p> {/* Prix annuel pour la location */}
    <Link href={`/saisonnieredetail/${saison.id}`}>
        <button className={styles.button}>Voir Détails</button>
      </Link>
    </div>

    </div>
  );
};

export default SaisonniereBien;
