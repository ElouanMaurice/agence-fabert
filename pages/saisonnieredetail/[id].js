import { useRouter } from "next/router";
import styles from "../../styles/SaisonniereDetail.module.css";
import Image from "next/image";

const SaisonniereDetail = ({ saison }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Chargement...</p>;  // ✅ Ajoute un état de chargement
  }

  if (!saison) {
    return <p>Bien non trouvé...</p>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.push(`/louer?typeLocation=${router.query.typeLocation || 'saisonniere'}`)}>
        ← Retour aux locations
      </button>
      <div className={styles.publication}>
      <h1 className={styles.title}>{saison.titre}</h1>
      <Image src={saison.image} width={650} height={400} alt={saison.title} />
      <p className={styles.location}>{saison.location}</p>
      <p className={styles.price}>{saison.prix} €</p>
      <p className={styles.description}>{saison.description}</p>
      <button className={styles.contactButton}>Contacter l'agence</button>
      </div>
    </div>
  );
};

// // Générer les chemins dynamiques
// export async function getStaticPaths() {
//   const properties = [
//     { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
//   ];

//   const paths = properties.map((property) => ({
//     params: { id: property.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// // Récupérer les détails d'un bien
// export async function getStaticProps({ params }) {
//   const properties = [
//     { id: 1, title: "Maison à Saint Martin", location: "Saint Martin de Ré", price: 1200000, image: "/images1.jpg" },
//     { id: 2, title: "Appartement à La Flotte", location: "La Flotte", price: 750000, image: "/images1.jpg" },
//   ];
export async function getServerSideProps({ params }) {
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

  const saison = saisonnieres.find((p) => p.id.toString() === params.id);
 if (!saison) {
    return { notFound: true };
  }
  return {
    props: { saison },
  };
}

export default SaisonniereDetail;
