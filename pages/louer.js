import React, { useState, useEffect } from 'react';
import styles from '../styles/louer.module.css';
import Header from '../components/Header';
import LocativeBienList from "../components/LocativeBienList";
import SaisonniereBienList from "../components/SaisonniereBienList";
import FilterBarLocative from '../components/FilterBarLocative';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

const Louer = () => {
  const [typeLocation, setTypeLocation] = useState(null);
  const [locativeFilters, setLocativeFilters] = useState({ types: [], location: "", minPrice: null, maxPrice: null, sortOrder: "" });
  const [saisonniereFilters, setSaisonniereFilters] = useState({ types: [], location: "", minPrice: null, maxPrice: null, sortOrder: "" });
  const [displayedLocatives, setDisplayedLocatives] = useState([]);
  const [displayedSaisonnieres, setDisplayedSaisonnieres] = useState([]);
  const router = useRouter();

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

  useEffect(() => {
    let filteredLocatives = locatives.filter(location =>
      (!locativeFilters.location || location.location === locativeFilters.location) &&
      (!locativeFilters.minPrice || location.prix >= locativeFilters.minPrice) &&
      (!locativeFilters.maxPrice || location.prix <= locativeFilters.maxPrice) &&
      (locativeFilters.types.length === 0 || locativeFilters.types.includes(location.type))
    );

    if (locativeFilters.sortOrder === "croissant") {
      filteredLocatives.sort((a, b) => a.prix - b.prix);
    } else if (locativeFilters.sortOrder === "décroissant") {
      filteredLocatives.sort((a, b) => b.prix - a.prix);
    }

    setDisplayedLocatives(filteredLocatives);
  }, [locativeFilters]);

  useEffect(() => {
    let filteredSaisonnieres = saisonnieres.filter(saison =>
      (!saisonniereFilters.location || saison.location === saisonniereFilters.location) &&
      (!saisonniereFilters.minPrice || saison.prix >= saisonniereFilters.minPrice) &&
      (!saisonniereFilters.maxPrice || saison.prix <= saisonniereFilters.maxPrice) &&
      (saisonniereFilters.types.length === 0 || saisonniereFilters.types.includes(saison.type))
    );

    if (saisonniereFilters.sortOrder === "croissant") {
      filteredSaisonnieres.sort((a, b) => a.prix - b.prix);
    } else if (saisonniereFilters.sortOrder === "décroissant") {
      filteredSaisonnieres.sort((a, b) => b.prix - a.prix);
    }

    setDisplayedSaisonnieres(filteredSaisonnieres);
  }, [saisonniereFilters]);

  useEffect(() => {
    if (router.query.typeLocation) {
      setTypeLocation(router.query.typeLocation);
    }
  }, [router.query.typeLocation]);

  const handleDetailClick = (id) => {
    router.push(`/louer/${id}?typeLocation=${typeLocation}`);
  };

  
    return (
      <div>
        <Header />
        <div className={styles.firstcontainer}>
          <h1 className={styles.h1}>Bienvenue sur la page des locations Kti Immo</h1>
  
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${typeLocation === 'locative' ? styles.active : ''}`}
              onClick={() => {
                setTypeLocation('locative');
                router.push('/louer?typeLocation=locative');
              }}
            >
              Location Annuelle
            </button>
            <button
              className={`${styles.button} ${typeLocation === 'saisonniere' ? styles.active : ''}`}
              onClick={() => {
                setTypeLocation('saisonniere');
                router.push('/louer?typeLocation=saisonniere');
              }}
            >
              Location Saisonnière
            </button>
          </div>
  
          {(typeLocation === null || typeLocation === '') && <h4 className={styles.h4}>Sélectionnez un type de location pour commencer.</h4>}
  
          {typeLocation && (
            <div className={styles.container}>
              {/* Sidebar filtre */}
              <div className={styles.sidebar}>
                <FilterBarLocative
                  filters={typeLocation === 'locative' ? locativeFilters : saisonniereFilters}
                  setFilters={typeLocation === 'locative' ? setLocativeFilters : setSaisonniereFilters}
                />
              </div>
  
              {/* Liste des biens */}
              <div className={styles.content}>
                {typeLocation === 'locative' ? (
                  <LocativeBienList locative={displayedLocatives} handleDetailClick={handleDetailClick} />
                ) : (
                  <SaisonniereBienList saisonniere={displayedSaisonnieres} handleDetailClick={handleDetailClick} />
                )}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Louer;