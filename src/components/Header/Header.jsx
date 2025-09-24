
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
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contactMe">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
