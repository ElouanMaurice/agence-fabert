import React from 'react';
import styles from '../styles/louer.module.css';
import { useState } from 'react';
import Link from "next/link";

import Header from '../components/Header';



const louer = () => {

  const [typeLocation, setTypeLocation] = useState('locative'); // 'locative' ou 'saisonniere'

  return (
    <div>
        <Header />
<div className={styles.container}>
      <h1 className={styles.h1}>Bienvenue sur la page des locations Kti Immo</h1>

      <div className={styles.dropdown}>
        <div className={styles.dropdownContent}>
          <Link className={styles.bouton} href="locative" onClick={() => setTypeLocation('locative')}>LOCATION ANNUELLE</Link>
          </div>
          <div className={styles.dropdownContent}>
          <Link className={styles.bouton} href="saisonniere" onClick={() => setTypeLocation('saisonniere')}>LOCATION SAISONNIERE</Link>
        </div>
      </div>

      <div>
        {typeLocation === 'locative' && (
          <div>Contenu pour la location annuelle</div>
        )}
        {typeLocation === 'saisonniere' && (
          <div>Contenu pour la location saisonnière</div>
        )}
      </div>
      </div>
    </div>
  );
 
};

export default louer;