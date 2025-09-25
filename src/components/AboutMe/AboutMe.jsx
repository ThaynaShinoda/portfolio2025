/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import styles from "./AboutMe.module.css";

export function AboutMe() {
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
    <div id="aboutme" className={styles.aboutContainer}>
      <motion.h4 className={styles.title} {...animationProps}>Sobre mim</motion.h4>
      <motion.p className={styles.text} {...animationProps}>
        Oi! Me chamo <b>Thayná</b>, moro em Uberlândia - MG, e atualmente estou
        cursando <b>Análise e Desenvolvimento de Sistemas</b> na Estácio. Meu
        caminho até aqui foi cheio de mudanças, aprendizados e recomeços e cada
        etapa me ajudou a chegar na área da tecnologia com mais propósito e
        vontade de crescer.
      </motion.p>

      <motion.h4 className={styles.title} {...animationProps}>Minha trajetória</motion.h4>
      <motion.p className={styles.text} {...animationProps}>
        Sou formada em <b>Tecnologia da Construção Civil pela FATEC-SP</b>, mas
        não cheguei a atuar na área. Trabalhei por dois anos como vendedora em
        uma loja de produtos naturais em São Paulo, onde desenvolvi habilidades
        de comunicação, atendimento ao público e responsabilidade. Depois disso,
        morei no Japão por cinco anos, trabalhando no turno da noite em linha de
        produção. Essa fase me ensinou muito sobre disciplina, resistência e
        adaptação a uma cultura totalmente diferente. Ao voltar ao Brasil, tirei
        um tempo para mim e, em seguida, decidi investir de vez em algo que
        sempre me despertou curiosidade: o desenvolvimento de software. Me
        matrículei em um curso de <b>Desenvolvimento Full Stack na EBAC</b> e
        aprendi muito, abrindo uma nova visão sobre desenvolvimento e
        despertando vontade de solidificar minha base teórica e buscar inserção
        qualificada na área, assim me levando a graduação em Análise de
        Desenvolvimento de Sistemas.
      </motion.p>
      <motion.h4 className={styles.title} {...animationProps}>Curiosidades</motion.h4>
      <motion.p className={styles.text} {...animationProps}>
        Sou uma pessoa tranquila, determinada e criativa. Gosto de atividades
        que me conectam com o presente, como yoga, crochê e cerâmica fria,
        hobbies que também me ajudam a desenvolver foco, paciência e atenção aos
        detalhes. Essas qualidades refletem bastante em como encaro meus estudos
        e projetos de programação. Este portfólio é o espaço onde compartilho um
        pouco da minha jornada e das coisas que venho construindo com dedicação
        e carinho.
      </motion.p>
    </div>
  );
}
