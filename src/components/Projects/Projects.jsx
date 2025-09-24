import styles from "./Projects.module.css";
import screenNlw from "../../assets/nlw-agents-iniciante.png";
import screenEfood from "../../assets/efood-ebac.png";
import screenLetMeAsk from "../../assets/nlw-let-me-ask.png";
import screenLandingPage from "../../assets/landing-page-uniformes.png";
import screenLefContabilidade from "../../assets/lef-contabilidade.png";
const projects = [
  {
    title: "eSports - Assistente de Meta (NLW20)",
    description:
      "Este projeto é um assistente de meta para jogos eletrônicos, desenvolvido durante a NLW da Rocketseat. Ele utiliza a API Gemini para responder perguntas sobre estratégias, builds e dicas para jogos como Valorant, League of Legends e CS:GO.",
    tech: ["HTML", "CSS", "JavaScript", "API Gemini"],
    img: screenNlw,
    live: "https://nlw-agents-iniciante.vercel.app/",
    repo: "https://github.com/ThaynaShinoda/nlw-agents-iniciante",
  },
  {
    title: "eFood - Viva experiências gastronômicas no conforto da sua casa",
    description:
      "EFOOD é uma plataforma de e-commerce para restaurantes. O projeto simula um marketplace onde usuários podem visualizar restaurantes, explorar cardápios, adicionar itens ao carrinho e finalizar pedidos.",
    tech: [
      "React",
      "TypeScript",
      "Styled-components",
      "Redux Toolkit",
      "React Router DOM",
      "Formik",
      "Yup",
      "Vite",
      "React Spinners",
      "iMask",
    ],
    img: screenEfood,
    live: "https://efood-ecommerce-beta.vercel.app/",
    repo: "https://github.com/ThaynaShinoda/EFOOD-ecommerce",
  },
  {
    title: "Let Me Ask - Assistente de dúvidas",
    description:
      "Projeto desenvolvido durante um evento da Rocketseat para demonstrar o uso de agentes inteligentes na web.",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "TanStack React Query",
      "React Router DOM",
      "Radix UI",
      "Shadcn/ui",
      "Vite",
      "Lucide React",
      "Node.js",
      "Fastify",
      "Postgresql",
      "Drizzle ORM",
      "Zod",
      "Docker",
      "Biome",
    ],
    img: screenLetMeAsk,
    // live: "",
    repo: "https://github.com/ThaynaShinoda/nlw-20-agents-web", // repositório web
    repoServer: "https://github.com/ThaynaShinoda/nlw-20-agents-server", // repositório server
  },
  {
    title: "Great Uniformes - Landing Page Uniformes",
    description:
      "Great Uniformes é um site institucional moderno e responsivo para uma empresa fictícia de confecção de uniformes profissionais. O projeto foi desenvolvido com React e Vite, oferecendo uma experiência de usuário fluida e moderna.",
    tech: [
      "React",
      "JavaScript",
      "CSS Modules",
      "Phosphor Icons",
      "Swiper",
      "Vite",
    ],
    img: screenLandingPage,
    live: "https://landing-page-uniformes.vercel.app/",
    repo: "https://github.com/ThaynaShinoda/landing-page-uniformes",
  },
  {
    title: "L&F Contabilidade - Landing Page Contabilidade",
    description:
      "Aplicação de gerenciamento de contatos feita como exercício do módulo 32 da EBAC. Permite visualizar, adicionar, editar e remover contatos.",
    tech: ["ReactJS", "CSS Module", "Phosphor Icons", "Vite"],
    img: screenLefContabilidade,
    live: "https://lefcontabilidade.com.br/",
    repo: "https://github.com/ThaynaShinoda/lef-contabilidade",
  },
];

export function Projects() {
  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 className={`${styles.title} ${styles.autoShow}`}>Meus Projetos</h2>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div
            className={`${styles.card}${
              index % 2 !== 0 ? " " + styles.reverse : ""
            } ${styles.autoShow}`}
            key={project.title}
          >
            <img src={project.img} alt={project.title} />
            <div className={styles.infosCard}>
              <h3 className={styles.titleCard}>{project.title}</h3>
              <p className={styles.textCard}>{project.description}</p>
              <div className={styles.techList}>
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className={styles.links}>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    🔗 Ver Projeto
                  </a>
                )}
                <a href={project.repo} target="_blank" rel="noreferrer">
                  💻 Código Web
                </a>
                {project.repoServer && (
                  <a href={project.repoServer} target="_blank" rel="noreferrer">
                    🖥️ Código Server
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
