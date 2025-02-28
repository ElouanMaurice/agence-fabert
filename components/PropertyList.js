import React from "react";
import PropertyCard from "./PropertyCard";
import styles from '../styles/PropertyList.module.css';


const PropertyList = ({ properties }) => {
  return (
    <div className={styles.propertygrid}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;

