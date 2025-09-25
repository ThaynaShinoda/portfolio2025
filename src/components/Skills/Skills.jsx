/* eslint-disable no-unused-vars */
import { motion } from "motion/react"; 
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
  const animationProps = {
    initial: { opacity: 0, y: 200, scale: 0.3 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
    viewport: {
      once: false,
      amount: 0.7,
      margin: "30% 0px 0px 0px",
    },
  };

  return (
    <section className={styles.skillsSection} id="skills">
      <motion.h2 className={styles.title} {...animationProps}>Habilidades</motion.h2>
      <div className={styles.content}>
        <motion.div className={styles.text} {...animationProps}>
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
        </motion.div>
        <motion.ul className={styles.skillList} {...animationProps}>
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
        </motion.ul>
      </div>
    </section>
  );
}
