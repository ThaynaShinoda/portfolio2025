import {GithubLogoIcon, LinkedinLogoIcon, InstagramLogoIcon, ReadCvLogoIcon} from '@phosphor-icons/react'
import styles from "./Home.module.css"

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Thayná Rie Shinoda</h1>
      <h2>Desenvolvedora Front-end</h2>
      <p>Dando primeiros passos na construção de solução web.</p>
      <ul className={styles.socialMedia}>
        <li>
          <a href="https://github.com/ThaynaShinoda" target='_blank' rel="noopener noreferrer"><GithubLogoIcon size="32"/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thayn%C3%A1-rie-shinoda-135b36359/" target='_blank' rel="noopener noreferrer"><LinkedinLogoIcon size="32"/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/shinoda_rie/" target='_blank' rel="noopener noreferrer"><InstagramLogoIcon size="32"/></a>
        </li>
        <li>
          <a href="/cv_thayna.pdf" target='_blank' rel="noopener noreferrer"><ReadCvLogoIcon size="32"/></a>
        </li>
      </ul>
    </div>
  );
}
