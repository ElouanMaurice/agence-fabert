import { useRouter } from "next/router";
import styles from "../../styles/AchatDetail.module.css";
import Image from "next/image";

const AchatDetail = ({ property }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Chargement...</p>;  // ✅ Ajoute un état de chargement
  }

  if (!property) {
    return <p>Bien non trouvé...</p>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.push("/acheter")}>
        ← Retour aux ventes
      </button>
      <div className={styles.publication}>
      <h1 className={styles.title}>{property.title}</h1>
      <Image src={property.image} width={650} height={400} alt={property.title} />
      <p className={styles.location}>{property.location}</p>
      <p className={styles.price}>{property.price} €</p>
      <p className={styles.description}>Superbe bien immobilier situé à {property.location}, idéal pour investir.</p>
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
    const properties = [
      { id: 1, title: "Maison à Saint Martin", location: "Saint Martin de Ré", price: 1200000, image: "/images1.jpg" },
      { id: 2, title: "Appartement à La Flotte", location: "La Flotte", price: 750000, image: "/images1.jpg" },
      { id: 3, title: "Maison à Ars-en-Ré", location: "Ars-en-Ré", price: 1000000, image: "/images1.jpg" },
      { id: 4, title: "Appartement à Saint Martin", location: "Saint Martin de Ré", price: 740000, image: "/images1.jpg" },
      { id: 5, title: "Terrain à Saint Martin", location: "Saint Martin de Ré", price: 25000, image: "/images1.jpg" },
      { id: 6, title: "Appartement à Saint Martin", location: "Saint Martin de Ré", price: 810000, image: "/images1.jpg" },
      { id: 7, title: "Maison à La Couarde", location: "La Couarde", price: 920000, image: "/images1.jpg" },
      { id: 8, title: "Maison à Ars-en-Ré", location: "Ars-en-Ré", price: 880000, image: "/images1.jpg" },
      { id: 9, title: "Appartement à La Couarde", location: "La Couarde", price: 500000, image: "/images1.jpg" },
      { id: 10, title: "Terrain à Rivedoux", location: "Rivedoux", price: 23000, image: "/images1.jpg" },
      { id: 11, title: "Garage à Loix", location: "Loix", price: 20000, image: "/images1.jpg" },
    ];
  

  const property = properties.find((p) => p.id.toString() === params.id);
 if (!property) {
    return { notFound: true };
  }
  return {
    props: { property },
  };
}

export default AchatDetail;
