import { GoToTop } from "@/components/GoToTop";
import { Header } from "@/components/Header";
import { Skills } from "@/constants";
import { HomeContainer, MainContent, Section, SkillsContent, Wrapper } from "./styles";

export function HomeContent() {
  return (
    <HomeContainer>
      <Section>
        <Header />
        <MainContent>
          <div className="title">
            <p>What’s up?</p>
            <p>I am Paulo Braz</p>
            <p>Full-Stack Developer</p>
          </div>
        </MainContent>
      </Section>
      <Section id="projects" backgroundColor="#09090B">
        <Wrapper>
          <div className="unilink">
            <p>projects</p>
            {/* <img src="/images/unilink.png" alt="unilink" /> */}
          </div>
        </Wrapper>
      </Section>
      <Section id="experience">
        <Wrapper>
          <p>experience</p>
        </Wrapper>
      </Section>
      <Section 
        id="skills" 
        backgroundColor="#09090B"
        height="initial"
      >
        <Wrapper padding="120px 0">
          <h1>Skills</h1>
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
        </Wrapper>
      </Section>
      <Section id="contact">
        <Wrapper>
          <p>contact</p>
        </Wrapper>
      </Section>
      <GoToTop />
    </HomeContainer>
  )  
}