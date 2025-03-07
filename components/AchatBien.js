import styles from '../styles/AchatBien.module.css';
import React from "react";
import Link from "next/link";



const AchatBien = ({ property }) => {
  return (
    <div className={styles.propertyCard}>
    <img className={styles.image} src={property.image} alt={property.title} />
    <div className={styles.propertyCardInfo}>
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>{property.price}€</p>
      <Link href={`/achatdetail/${property.id}`}>
        <button className={styles.button}>Voir Détails</button>
      </Link>
    </div>
  </div>
  );
};

export default AchatBien;