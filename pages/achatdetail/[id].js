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



export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`http://localhost:5000/api/properties/${params.id}`);
    if (!res.ok) {
      throw new Error("Propriété non trouvée");
    }
    const property = await res.json();

    return { props: { property } };
  } catch (error) {
    return { notFound: true };
  }
}



export default AchatDetail;
