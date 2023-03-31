import { GoToTop } from "@/components/GoToTop";
import { Header } from "@/components/Header";
import { Skills } from "@/constants";
import { ArrowUpRight } from "phosphor-react";
import { ContactSection, ExperienceSection, HomeContainer, MainContent, ProjectsSection, Section, SkillsContent, SkillsSection, Wrapper } from "./styles";

export function HomeContent() {
  return (
    <HomeContainer>
      <Section id="top">
        <Header />
        <MainContent>
          <div className="bg-video">
            <video src="/videos/bg-video.mp4" playsInline autoPlay muted loop />
          </div>
          <div className="title">
            <p>What&lsquo;s up?</p>
            <p>I am Paulo Braz</p>
            <p>Full-Stack Developer</p>
          </div>
        </MainContent>
      </Section>
      <ProjectsSection id="projects">
        <div className="projects-title">
          <h2>Projects</h2>
        </div>
        <div className="wrapper">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </ProjectsSection>
      <ExperienceSection id="experience">
        <div className="wrapper">          
          <h2>Experience</h2>
          <div className="experiences">
            <span>
              <h3>WEDIGI</h3>
              <h4>Desenvolvedor Front-end Jr</h4>
              <ul>
                <li>
                  Wedigi tech: Equipe responsável por criar soluções de implementação e evolução 
                  com objetivo de manter o e-commerce dos clientes atualizado.
                </li>
                <li>
                  Consultoria para entender o plano de negocios do cliente, 
                  adicionando as melhores soluções e novas funcionalidades solicitada.
                </li>
                <li>
                  Tecnologia utilizadas: React, JavaScript, Vtex, VTEX IO, TypeScript, CSS, SCSS, HTML.
                </li>
              </ul>
            </span>
            <span>
              <h3>ADBAT</h3>
              <h4>Desenvolvedor Front-end Jr</h4>
              <ul>
                <li>Desenvolvimento de um sistema web para uma corretora de imoveis.</li>
                <li>
                  Desenvolvimento de layouts responsivos, garantindo que o sistema se adapte de 
                  forma adequada em diferentes tamanhos de tela e dispositivos, proporcionando uma melhor 
                  experiência para o usuário final.
                </li>
                <li>
                  Criação e Validação de formulários, validar os dados inseridos pelo usuário para evitar 
                  erros e inconsistências no sistema.
                </li>
                <li>Consumo de API, seja para integração de sistemas ou para buscar informações em tempo real.</li>
                <li> ReactJS, NextJs, TypeScript, Styled Components.</li>
              </ul>
            </span>
          </div>
        </div>
      </ExperienceSection>
      <SkillsSection id="skills">
        <div className="wrapper">
          <h2>Skills</h2>
          <SkillsContent>
            {Skills.map((item, index) => (
              <div className="skill" key={`skill${index}`}>
                <span>
                  <img src={`/logos/${item.skill}.svg`} alt={item.skill} />
                </span>
                <p>{item.title}</p>
              </div>
            ))}
          </SkillsContent>
        </div>
      </SkillsSection>
      <ContactSection id="contact">
        <div className="wrapper">
          <h2>Let&lsquo;s start a project together?</h2>
          <a href="https://www.linkedin.com/in/paulobr4z/" target="_blank" rel="noreferrer">
            <span>
              <p>LINKEDIN</p>
              <ArrowUpRight size={44} weight="bold" />
            </span>
          </a>
          <a href="https://github.com/paulobr4z" target="_blank" rel="noreferrer">
            <span>
              <p>GITHUB</p>
              <ArrowUpRight size={44} weight="bold" />
            </span>
          </a>
          <a href="https://wa.me/5594981147978" target="_blank" rel="noreferrer">
            <span>
              <p>WHATSAPP</p>
              <ArrowUpRight size={44} weight="bold" />
            </span>
          </a>
          <a href="mailto:paulo.braz.araujo@gmail.com" target="_blank" rel="noreferrer">
            <span>
              <p>EMAIL</p>
              <ArrowUpRight size={44} weight="bold" />
            </span>
          </a>
        </div>
      </ContactSection>
      <GoToTop />
    </HomeContainer>
  )  
}