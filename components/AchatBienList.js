import React from "react";
import AchatBien from "./AchatBien";
import styles from '../styles/AchatBienList.module.css';


const AchatBienList = ({ properties }) => {
  return (
    <div className={styles.propertyGrid}>
      {properties.map((property) => (
        <AchatBien key={property.id} property={property} />
      ))}
    </div>
  );
};

export default AchatBienList;

