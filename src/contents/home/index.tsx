import { GoToTop } from "@/components/GoToTop";
import { Header } from "@/components/Header";
import { Skills } from "@/constants";
import { ArrowUpRight } from "phosphor-react";
import { ContactSection, HomeContainer, MainContent, ProjectsSection, Section, SkillsContent, SkillsSection, Wrapper } from "./styles";

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
            <p>What’s up?</p>
            <p>I am Paulo Braz</p>
            <p>Full-Stack Developer</p>
          </div>
        </MainContent>
      </Section>
      <ProjectsSection id="projects">
        <div className="wrapper">
          <div className="unilink">
            <p>projects</p>
          </div>
        </div>
      </ProjectsSection>
      <Section id="experience">
        <Wrapper>
          <p>experience</p>
        </Wrapper>
      </Section>
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
          <h2>Let's start a project together?</h2>
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