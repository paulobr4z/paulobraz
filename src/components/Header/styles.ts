import styled from 'styled-components'

export const HeaderContainer = styled.div`
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

  nav {
    display: flex;
    gap: 32px;
    padding: 16px 32px;
    border-radius: 100px;
  }

  a {
    text-decoration: none;
  }
  
  p {
    font-size: 22px;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    /* font-weight: bold; */
  }
`