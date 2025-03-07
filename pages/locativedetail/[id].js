import { useRouter } from "next/router";
import styles from "../../styles/LocativeDetail.module.css";
import Image from "next/image";

const LocativeDetail = ({ location }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Chargement...</p>;  // ✅ Ajoute un état de chargement
  }

  if (!location) {
    return <p>Bien non trouvé...</p>;
  }

  return (
    <div className={styles.container}>
      <button 
        className={styles.backButton} 
        onClick={() => router.push(`/louer?typeLocation=${router.query.typeLocation || 'locative'}`)}
      >
        ← Retour aux locations
      </button>
      <div className={styles.publication}>
        <h1 className={styles.title}>{location.titre}</h1>
        <Image src={location.image} width={650} height={400} alt={location.titre} />
        <p className={styles.location}>{location.location}</p>
        <p className={styles.price}>{location.prix} €</p>
        <p className={styles.description}>{location.description}</p>
        <button className={styles.contactButton}>Contacter l'agence</button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
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

  

  const location = locatives.find((p) => p.id.toString() === params.id);

  if (!location) {
    return { notFound: true };
  }

  return {
    props: { location },
  };
}

export default LocativeDetail;
