import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <div className="logo">
          <a href="#top">
            {/* <p>paulobr4z</p> */}
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </div>
        <nav>
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
        </nav>
      </div>
    </HeaderContainer>
  )  
}