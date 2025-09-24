import styles from "./Skills.module.css";

const skills = [
  { name: "HTML5", level: 5 },
  { name: "CSS3", level: 5 },
  { name: "JavaScript", level: 4 },
  { name: "ReactJS", level: 4 },
  { name: "Figma", level: 4 },
  { name: "VueJS", level: 3 },
  { name: "TypeScript", level: 2 },
  { name: "Redux", level: 2 },
  { name: "Python", level: 2 },
  { name: "Cypress", level: 2 },
];

export function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={`${styles.title} ${styles.autoShow}`}>Habilidades</h2>
      <div className={styles.content}>
        <div className={`${styles.text} ${styles.autoShow}`}>
          <p>
            Ao longo da minha formação como desenvolvedora, tenho focado
            principalmente em tecnologias Front-end, com maior domínio em HTML,
            CSS, JavaScript e ReactJS. Essas ferramentas são a base dos meus
            projetos e onde me sinto mais confortável para criar interfaces
            funcionais e acessíveis.
          </p>
          <p>
            Apesar de estar cursando um programa Full Stack, percebi que meu
            interesse está voltado para a parte visual das aplicações e é nela
            que concentro meus estudos. Estou sempre buscando aprender mais
            sobre boas práticas, acessibilidade e design responsivo.
          </p>
          <p>
            Também venho explorando tecnologias como TypeScript, Redux, Cypress
            e Python, reconhecendo sua importância no mercado e me esforçando
            para melhorar gradualmente nesses pontos.
          </p>
        </div>
        <ul className={styles.skillList}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              <span>{skill.name}</span>
              <div className={styles.star}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < skill.level ? styles.filled : styles.empty}
                  >
                    ★
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
