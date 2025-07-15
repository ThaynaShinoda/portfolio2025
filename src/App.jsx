import "./App.css";
import { Home } from "./pages/Home/Home";
import { Sobre } from "./pages/Sobre/Sobre";
import { Projetos } from "./pages/Projetos/Projetos";
import { Habilidades } from "./pages/Habilidades/Habilidades";
import { Contatos } from "./pages/Contatos/Contatos";
import {
  HouseIcon,
  UserIcon,
  FolderIcon,
  CodeIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import fundo from "./assets/background_cherry_blossom.jpg";
import { useEffect, useRef, useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Section } from "./components/Section/Section";

//Estrutura das seções
const sections = [
  { id: "home", label: "Home", icon: <HouseIcon size={20} />, component: Home },
  {
    id: "sobre",
    label: "Sobre mim",
    icon: <UserIcon size={20} />,
    component: Sobre,
  },
  {
    id: "projetos",
    label: "Projetos",
    icon: <FolderIcon size={20} />,
    component: Projetos,
  },
  {
    id: "habilidades",
    label: "Habilidades",
    icon: <CodeIcon size={20} />,
    component: Habilidades,
  },
  {
    id: "contatos",
    label: "Contatos",
    icon: <PhoneIcon size={20} />,
    component: Contatos,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  //Cria uma referência para o elemento que tem o scroll (o conteúdo principal)
  const contentRef = useRef(null);

  //useEffect para detectar o scroll
  useEffect(() => {
    //Pega o elemento que foi referenciado com useRef
    const contentEl = contentRef.current;
    if (!contentEl) return;

    //Busca todas as seções dentro do conteúdo principal
    const sectionEls = contentEl.querySelectorAll(".section");

    function onScroll() {
      let current = sections[0].id;

      //valor infinito para comparar distância, a menor distância entre a seção e o topo será usada para comparar distâncias
      let minDist = Infinity;

      //Percorre todas as seções visíveis na tela (elementos com classe .section).
      sectionEls.forEach((section) => {
        //Pega as informações de posição da seção na tela.
        const rect = section.getBoundingClientRect();

        //Calcula a distância absoluta entre o topo da seção e o topo do contêiner com scroll (contentEl).
        const dist = Math.abs(rect.top - contentEl.getBoundingClientRect().top);
        if (
          rect.top - contentEl.getBoundingClientRect().top <= 100 &&
          dist < minDist
        ) {
          minDist = dist; //Atualiza a menor distância (minDist)
          current = section.id;
        }
      });
      setActiveSection(current);
    }

    contentEl.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => contentEl.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container" style={{ backgroundImage: `url(${fundo})` }}>
      <div className="wrapper">
        <Sidebar sections={sections} activeSection={activeSection} />
        <main className="content" ref={contentRef}>
          {sections.map((sec) => (
            <Section
              key={sec.id}
              id={sec.id}
              label={sec.label}
              Component={sec.component}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
