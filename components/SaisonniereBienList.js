import React from "react";
import SaisonniereBien from "./SaisonniereBien"; // Mise à jour du nom du composant importé
import styles from '../styles/SaisonniereBienList.module.css';

const SaisonniereBienList = ({ saisonniere }) => {
    if (!saisonniere || !Array.isArray(saisonniere)) {
        return <p>Aucun bien locatif disponible.</p>;
      }
  return (
    <div className={styles.propertyGrid}>
      {saisonniere.map((saison) => (
        <SaisonniereBien key={saison.id} saison={saison} />
      ))}
    </div>
  );
};

export default SaisonniereBienList;
