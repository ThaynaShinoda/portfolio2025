import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ul className={styles.menu}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contactMe">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
