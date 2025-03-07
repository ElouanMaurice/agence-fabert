import React from "react";
import LocativeBien from "./LocativeBien"; // Mise à jour du nom du composant importé
import styles from '../styles/LocativeBienList.module.css';

const LocativeBienList = ({ locative }) => {
  if (!locative || !Array.isArray(locative)) {
    return <p>Aucun bien locatif disponible.</p>;
  }
  return (
    <div className={styles.propertyGrid}>
      {locative.map((location) => (
        <LocativeBien key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocativeBienList;
