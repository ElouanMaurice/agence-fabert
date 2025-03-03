import React from "react";
import LocativeBien from "./LocativeBien"; // Mise à jour du nom du composant importé
import styles from '../styles/LocativeBienList.module.css';

const LocativeBienList = ({ locative }) => {
  return (
    <div className={styles.propertyGrid}>
      {locative.map((bien) => (
        <LocativeBien key={bien.id} bien={bien} />
      ))}
    </div>
  );
};

export default LocativeBienList;
