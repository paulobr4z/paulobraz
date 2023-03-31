import { useState } from "react";
import { HeaderContainer } from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer isOpen={isOpen}>
      <div className="wrapper">
        <div className="logo">
          <a href="#top">
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </div>
        <nav className="desk-menu">
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
        <div
          className="mobile-menu"
          onClick={() => setIsOpen(true)}
        >
          <p>menu</p>
        </div>
        <div className="mobile-menu-options">
          <p
            className="close-menu"
            onClick={() => setIsOpen(false)}
          >
            close
          </p>
          <nav>
            <a 
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              <p>projects</p>
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
            >
              <p>experience</p>
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
            >
              <p>skills</p>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              <p>contact</p>
            </a>
          </nav>
        </div>
      </div>
    </HeaderContainer>
  )  
}