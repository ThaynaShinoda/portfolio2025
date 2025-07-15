import styles from "./Section.module.css";

export function Section({ id, Component }) {
  return (
    <section id={id} className={`${styles.section} section`}>
      {Component ? <Component /> : <div>Componente não encontrado</div>}
    </section>
  );
}
