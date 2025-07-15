import styles from "./Sidebar.module.css";
import hanko from '../../assets/hanko_shinoda.png'

export function Sidebar({ sections, activeSection }) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.hanko} src={hanko} alt="Carimbo com o sobrenome Shinoda em kanji" />
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={`${styles.sidebarLink} ${
            activeSection === sec.id ? styles.active : ""
          }`}
          id={`link-${sec.id}`}
          aria-current={activeSection === sec.id ? "page" : undefined}
        >
          {sec.icon}
          <span>{sec.label}</span>
        </a>
      ))}
    </aside>
  );
}
