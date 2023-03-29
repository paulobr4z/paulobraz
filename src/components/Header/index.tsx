import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <a href="#projects">
          <p>projects</p>
        </a>
        <a href="#experience">
          <p>experience</p>
        </a>
        <a href="#skills">
          <p>skills</p>
        </a>
        <a href="#contact">
          <p>contact</p>
        </a>
      </div>
    </HeaderContainer>
  )  
}