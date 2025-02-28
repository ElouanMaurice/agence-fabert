import styles from '../styles/Content.module.css';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Content = () => {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

  return (      
    <div className={styles.Content}>
      <div className={styles.titreh1}>
        <h1 className={styles.h1}>Découvrez Nos Prestations</h1>
      </div>
    
      <div className={styles.explication}>
        <div className={styles.gestionlocative}>
          <h2 className={styles.h2}>Gestion locative</h2>
          <p>Confiez-nous la gestion complète de votre bien. Nous nous occupons de la recherche de locataires, de l’administratif et de l’entretien pour une location en toute sérénité.</p>
          <div className={styles.boutonbien}>Voir nos locations</div>
        </div>

        <div className={styles.gestionsaisonniere}>
          <h2 className={styles.h2}>Location saisonnière</h2>
          <p>Optimisez vos revenus en louant votre bien en courte durée. Nous gérons les réservations, l’accueil des voyageurs et l’entretien pour une expérience sans souci.</p>
          <div className={styles.boutonbien}>Voir nos locations</div>
        </div>

        <div className={styles.conciergerie}>
          <h2 className={styles.h2}>Conciergerie</h2>
          <p>Un service sur-mesure pour les propriétaires et voyageurs : ménage, linge, accueil et assistance personnalisée, pour une tranquillité totale.</p>
        </div>

        <div className={styles.achat}>
          <h2 className={styles.h2}>Achat d'un bien</h2>
          <p>Vous cherchez à investir sur l’Île de Ré ? Nous vous accompagnons à chaque étape, de la sélection du bien jusqu’à la signature de l’acte de vente.</p>
          <div className={styles.boutonbien}>Voir nos biens</div>
        </div>
      </div>
      
      <div className={styles.carousel}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000 }}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} className={styles.carouselimage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.presentation}>
        <div className={styles.texte}>
          KTI Immo – Votre partenaire immobilier sur l'Île de Ré
          <br />
          Fondée par Cathy Fabert, KTI Immo est une agence immobilière locale dédiée à l'accompagnement personnalisé de ses clients dans leurs projets d'achat, de vente ou de location sur l'Île de Ré. Avec une connaissance approfondie du marché local et une approche humaine et professionnelle, l'agence vous aide à concrétiser vos rêves immobiliers en toute confiance. Que vous cherchiez une maison de vacances, un investissement ou un bien à vendre, KTI Immo est votre interlocuteur privilégié sur cette île unique.
        </div>
        <img className={styles.photofb} src="/photopré.jpg" alt="Photo de Présentation" />
      </div>
      <p>
        Découvrez nos offres en cliquant ici : <Link href="/achat">Page Vente</Link>
      </p>
    </div>
  );
};

export default Content;
