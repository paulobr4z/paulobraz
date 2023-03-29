import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .wrapper {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 32px;
    margin-top: 40px;
    padding: 16px 32px;
    border-radius: 100px;

    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px) saturate(1.7);
    -webkit-backdrop-filter: blur(20px) saturate(1.7);

    a {
      text-decoration: none;
    }
    
    p {
      font-size: 18px;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
    }
  }
`