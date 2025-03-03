import React, { useState } from "react";
import styles from "../styles/FilterBar.module.css";


const FilterBarLocative = ({ setFilters }) => {
    const [location, setLocation] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
  
    const handleTypeChange = (type) => {
      setSelectedTypes((prev) =>
        prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      );
    };
  
    const addFilters = () => {
      setFilters({
        types: selectedTypes,
        sortOrder,
        location,
        minPrice: minPrice ? parseInt(minPrice, 10) : null,
        maxPrice: maxPrice ? parseInt(maxPrice, 10) : null,
      });
  
    };
  
    const resetFilters = () => {
      setLocation("");
      setMinPrice("");
      setMaxPrice("");
      setSelectedTypes([]);
      setSortOrder("");
  
      setFilters({ types: [], sortOrder: "", location: "", minPrice: null, maxPrice: null });
    };
    

  
    return (
      <div className={styles.filterBar}>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Tous les emplacements</option>
          <option value="Saint Martin de Ré">Saint Martin de Ré</option>
          <option value="La Flotte">La Flotte</option>
          <option value="La Couarde">La Couarde</option>
          <option value="Ars-en-Ré">Ars-en-Ré</option>
          <option value="Loix">Loix</option>
          <option value="Rivedoux">Rivedoux</option>
        </select>

        <input type="number" placeholder="Prix min (€)" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <input type="number" placeholder="Prix max (€)" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

        {/* Filtre par type de bien */}
              <div >
                <p >Type de bien :</p>
                {["Maison", "Appartement", "Terrain", "Garage"].map((type) => (
                  <div
                  key={type}
                  className={`${styles.typeButton} ${selectedTypes.includes(type) ? styles.selected : ""}`}
                  onClick={() => handleTypeChange(type)}
                >
                  {type}
                </div>
                ))}
              </div>
  
      
  
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Aucun</option>
          <option value="croissant">Prix croissant</option>
          <option value="décroissant">Prix décroissant</option>
        </select>
  
        <button onClick={addFilters} className={styles.filterbouton}>Filtrer</button>
        <button onClick={resetFilters} className={styles.resetbouton}>Réinitialiser</button>
      </div>
    );
  };
  
  export default FilterBarLocative;