import React, { useState, useEffect } from 'react';
import styles from '../styles/louer.module.css';
import Header from '../components/Header';
import LocativeBienList from "../components/LocativeBienList";
import FilterBarLocative from '../components/FilterBarLocative';

const Louer = () => {
  const [typeLocation, setTypeLocation] = useState(null); // null au départ pour afficher l'accueil
  const [filters, setFilters] = useState({
    types: [],
    location: "",
    minPrice: null,
    maxPrice: null,
    sortOrder: ""
  });

  // Stocke les biens affichés après filtrage et tri
  const [displayedLocatives, setDisplayedLocatives] = useState([]);

  // Données des biens (remplaçables par une API plus tard)
  const locatives = [
    { id: 1, titre: "Appartement T2", prix: 600, image: "/images1.jpg", description: "Appartement lumineux avec balcon.", location: "Saint Martin de Ré", type: "Appartement" },
    { id: 2, titre: "Appartement T3", prix: 680, image: "/images1.jpg", description: "Grand salon et terrasse.", location: "La Flotte", type: "Appartement" },
    { id: 3, titre: "Maison", prix: 850, image: "/images1.jpg", description: "Belle maison", location: "La Couarde", type: "Maison" },
    { id: 4, titre: "Studio", prix: 500, image: "/images1.jpg", description: "Studio meublé en centre-ville.", location: "Ars-en-Ré", type: "Studio" },
    { id: 5, titre: "Maison", prix: 850, image: "/images1.jpg", description: "Superbe maison", location: "Loix", type: "Maison" },
    { id: 6, titre: "Maison avec piscine", prix: 1000, image: "/images1.jpg", description: "Maison familiale proche des écoles.", location: "Saint Martin de Ré", type: "Maison" },
    { id: 7, titre: "Appartement T2", prix: 650, image: "/images1.jpg", description: "Appartement lumineux avec balcon.", location: "La Flotte", type: "Appartement" },
    { id: 8, titre: "Maison avec jardin", prix: 1200, image: "/images1.jpg", description: "Maison avec jardin clos.", location: "La Couarde", type: "Maison" }
  ];

  // Fonction qui applique les filtres et le tri
  useEffect(() => {
    let filtered = locatives.filter((bien) => {
      return (
        (filters.location === "" || bien.location === filters.location) &&
        (filters.minPrice === null || bien.prix >= filters.minPrice) &&
        (filters.maxPrice === null || bien.prix <= filters.maxPrice) &&
        (filters.types.length === 0 || filters.types.includes(bien.type))
      );
    });

    // Appliquer le tri
    if (filters.sortOrder === "croissant") {
      filtered.sort((a, b) => a.prix - b.prix);
    } else if (filters.sortOrder === "décroissant") {
      filtered.sort((a, b) => b.prix - a.prix);
    }

    // Mettre à jour l'état des biens affichés
    setDisplayedLocatives(filtered);
  }, [filters]); // Se met à jour quand les filtres changent

  // Charger les biens au début
  useEffect(() => {
    setDisplayedLocatives(locatives);
  }, []);

  const saisonnieres = [
    { id: 1, titre: "Villa bord de mer", prix: 100, image: "/images1.jpg", description: "Superbe villa avec vue mer et piscine.", location: "Saint Martin de Ré", type: "Villa" },
    { id: 2, titre: "Appartement cosy", prix: 80, image: "/images1.jpg", description: "Idéal pour un séjour en couple.", location: "La Flotte", type: "Appartement" },
    { id: 3, titre: "Maison familiale", prix: 120, image: "/images1.jpg", description: "Grande maison parfaite pour les familles, proche des commerces.", location: "La Couarde", type: "Maison" },
    { id: 4, titre: "Studio en centre-ville", prix: 60, image: "/images1.jpg", description: "Studio moderne au cœur de Saint-Martin-de-Ré.", location: "Saint Martin de Ré", type: "Studio" },
    { id: 5, titre: "Loft avec terrasse", prix: 140, image: "/images1.jpg", description: "Loft spacieux avec une grande terrasse ensoleillée.", location: "Ars-en-Ré", type: "Loft" },
    { id: 6, titre: "Maison avec jardin", prix: 110, image: "/images1.jpg", description: "Maison calme avec jardin et barbecue, parfaite pour l'été.", location: "Loix", type: "Maison" },
    { id: 7, titre: "Chalet en bois", prix: 130, image: "/images1.jpg", description: "Chalet chaleureux dans un cadre naturel exceptionnel.", location: "Sainte-Marie-de-Ré", type: "Chalet" },
    { id: 8, titre: "Appartement vue sur le port", prix: 95, image: "/images1.jpg", description: "Appartement lumineux avec une magnifique vue sur le port.", location: "Saint Martin de Ré", type: "Appartement" },
    { id: 9, titre: "Maison avec piscine chauffée", prix: 200, image: "/images1.jpg", description: "Idéale pour les groupes, avec grande piscine privée.", location: "La Flotte", type: "Maison" },
    { id: 10, titre: "Cabane dans les arbres", prix: 150, image: "/images1.jpg", description: "Séjour insolite en pleine nature, parfait pour se ressourcer.", location: "Ars-en-Ré", type: "Cabane" },
    { id: 11, titre: "Maison de pêcheur", prix: 90, image: "/images1.jpg", description: "Charme authentique, à deux pas de la plage.", location: "Saint Martin de Ré", type: "Maison" },
    { id: 12, titre: "Grand gîte avec spa", prix: 250, image: "/images1.jpg", description: "Gîte de luxe avec spa et cheminée, idéal en hiver.", location: "Loix", type: "Gîte" }
  ];
  

  return (
    <div>
      <Header />
      <div className={styles.firstcontainer}>
        <h1 className={styles.h1}>Bienvenue sur la page des locations Kti Immo</h1>

        {/* Boutons pour sélectionner le type de location */}
        <div className={styles.buttonContainer}>
          <button 
            className={`${styles.button} ${typeLocation === 'locative' ? styles.active : ''}`}
            onClick={() => setTypeLocation('locative')}>
            Location Annuelle
          </button>
          <button 
            className={`${styles.button} ${typeLocation === 'saisonniere' ? styles.active : ''}`}
            onClick={() => setTypeLocation('saisonniere')}>
            Location Saisonnière
          </button>
        </div>

        {/* Affichage du contenu en fonction du type de location sélectionné */}
        {typeLocation === null && (
          <p>Sélectionnez un type de location pour voir les offres disponibles.</p>
        )}

        {typeLocation === 'locative' && (
          <div className={styles.container}>
            {/* Barre de filtre à gauche */}
            <div className={styles.sidebar}>
              <FilterBarLocative setFilters={setFilters} />
            </div>

            {/* Liste des biens à droite */}
            <div className={styles.content}>
              <h2 className={styles.h2}>Nos Locations Annuelles</h2>
              <LocativeBienList locative={displayedLocatives} />
            </div>
          </div>
        )}

        {typeLocation === 'saisonniere' && (
          <div className={styles.container}>
            {/* Barre de filtre à gauche */}
            <div className={styles.sidebar}>
              <FilterBarLocative setFilters={setFilters} />
            </div>

            {/* Liste des biens à droite */}
            <div className={styles.content}>
              <h2 className={styles.h2}>Nos Locations Saisonnières</h2>
              <LocativeBienList locative={saisonnieres} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Louer;
