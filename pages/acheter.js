import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import PropertyList from "../components/PropertyList";
import FilterBar from "../components/FilterBar";
import styles from "../styles/acheter.module.css"; // Import du CSS

const Acheter = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({ types: [],
    sortOrder: "",
    location: "",
    minPrice: null,
    maxPrice: null,});

  useEffect(() => {
        // Simuler une API
    const fetchProperties = [
      { id: 1, title: "Maison à Saint Martin", type: "Maison", location: "Saint Martin de Ré", price: 1200000, image: "/images1.jpg" },
      { id: 2, title: "Appartement à La Flotte", type: "Appartement", location: "La Flotte", price: 750000, image: "/images1.jpg" },
      { id: 3, title: "Maison à Ars-en-Ré", type: "Maison", location: "Ars-en-Ré", price: 1000000, image: "/images1.jpg" },
      { id: 4, title: "Appartement à Saint Martin", type: "Appartement", location: "Saint Martin de Ré", price: 740000, image: "/images1.jpg" },
      { id: 5, title: "Terrain à Saint Martin", type: "Terrain", location: "Saint Martin de Ré", price: 25000, image: "/images1.jpg" },
      { id: 6, title: "Appartement à Saint Martin", type: "Appartement", location: "Saint Martin de Ré", price: 810000, image: "/images1.jpg" },
      { id: 7, title: "Maison à La Couarde", type: "Maison", location: "La Couarde", price: 920000, image: "/images1.jpg" },
      { id: 8, title: "Maison à Ars-en-Ré", type: "Maison", location: "Ars-en-Ré", price: 880000, image: "/images1.jpg" },
      { id: 9, title: "Appartement à La Couarde", type: "Appartement", location: "La Couarde", price: 500000, image: "/images1.jpg" },
      { id: 10, title: "Terrain à Rivedoux", type: "Terrain", location: "Rivedoux", price: 23000, image: "/images1.jpg" },
      { id: 11, title: "Garage à Loix", type: "Garage", location: "Loix", price: 20000, image: "/images1.jpg" },
    ];

    setProperties(fetchProperties);
    setFilteredProperties(fetchProperties);
  }, []);

   // Appliquer les filtres
   useEffect(() => {
    let filtered = properties;

    // Filtrer par type
    if (filters.types.length > 0) {
        filtered = filtered.filter(p => filters.types.includes(p.type));
    }

    // Filtrer par localisation
    if (filters.location) {
        filtered = filtered.filter(p => p.location === filters.location);
    }

    // Filtrer par prix
    if (filters.minPrice !== null) {
        filtered = filtered.filter(p => p.price >= filters.minPrice);
    }

    if (filters.maxPrice !== null) {
        filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }

    // Trier par prix
    if (filters.sortOrder === "croissant") {
        filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === "décroissant") {
        filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProperties(filtered);
}, [filters, properties]);

  return (
    <div>
    <Header />
    <div className={styles.firstcontainer}>
      
      <h1 className={styles.title}>Liste des Biens Immobiliers Kti Immo </h1>

      {/* Conteneur principal avec Flexbox */}
      <div className={styles.container}>
        {/* Barre de filtre à gauche */}
        <div className={styles.sidebar}>
          <FilterBar setFilters={setFilters} />
        </div>

        {/* Liste des propriétés à droite */}
        <div className={styles.content}>
          <PropertyList properties={filteredProperties} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Acheter;
