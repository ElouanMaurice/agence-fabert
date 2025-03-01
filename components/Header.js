import styles from '../styles/Header.module.css';
import Link from "next/link";


const Header = () => {
  return (
    <header className={styles.Header}>
    <Link className={styles.logo} href='/'>
        <img className={styles.logoimage} src="/logo.png" alt="Logo KTI IMMO" />
    </Link >
    <div className={styles.menu}>
        <div className={styles.dropdown}>
            <Link className={styles.titlemenu} href="louer">LOUER</Link>
            <div className={styles.dropdownContent}>
              <Link href="locative">LOCATION ANNUELLE</Link>
              <Link href="saisonniere">LOCATION SAISONNIERE</Link>
            </div>
          </div>
            <Link className={styles.titlemenu} href='acheter'>ACHETER</Link>
            <Link className={styles.titlemenu} href='estimer'>ESTIMER</Link>
            <Link className={styles.titlemenu} href='agence'>NOTRE AGENCE</Link>
            <Link className={styles.titlemenu} href='honoraires'>NOS HONORAIRES</Link>
            <Link className={styles.titlemenu} href='contact'>NOUS CONTACTER</Link>
    </div>
       </header>
  );
};

export default Header;