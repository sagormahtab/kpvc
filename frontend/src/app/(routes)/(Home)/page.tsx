import { Cards } from "./Cards";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Books</h2>
      <Cards />
    </main>
  );
}
