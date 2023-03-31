import styled from 'styled-components'

interface IHeaderContainer {
  isOpen: boolean
}

export const HeaderContainer = styled.div<IHeaderContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(8px);
  z-index: 999;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  .logo {
    z-index: 999;
  }

  .desk-menu {
    display: flex;
    gap: 32px;
    padding: 16px 0;
    border-radius: 100px;

    @media (max-width: 800px) {
      display: none;
    }
  }

  .mobile-menu {
    display: none;

    @media (max-width: 800px) {
      display: flex;
    }
  }

  .mobile-menu-options {
    display: ${({ isOpen }) => isOpen ? "flex" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: #040405;
    padding: 0 32px;

    .close-menu {
      position: absolute;
      top: 0;
      left: 50%;
      width: 90%;
      height: 80px;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 22px;
      font-weight: normal;
      font-family: "Ubuntu", sans-serif;
    }

    p {
      font-size: 12vw;
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
  }
  
  p {
    font-size: 22px;
    color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
  }
`