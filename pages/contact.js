import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Content from '../components/Content';
import ContactForm from '../components/ContactForm';


const contact = () => {
  return (
    <div>
      <Header />
      <ContactForm/>
    </div>
  );
 
};

export default contact;