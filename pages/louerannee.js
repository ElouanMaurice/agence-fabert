import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Content from '../components/Content';
import Contact from '../components/ContactForm';


const louerannee = () => {
  return (
    <div>
        <Header />
      <h1>Bienvenue sur la page des locations à l'année</h1>
    </div>
  );
 
};

export default louerannee;