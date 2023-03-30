import styled from 'styled-components'

interface ISection {
  backgroundColor?: string;
  height?: string | number;
}

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const Section = styled.section<ISection>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor };
  height: ${({ height }) => height};
`

interface IWrapper {
  padding?: string;
}

export const Wrapper = styled.div<IWrapper>`
  width: 100%;
  max-width: 1440px;
  margin: 0 32px;
  padding: ${({padding}) => padding};
`

export const MainContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .bg-video {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: red;
  }

  .bg-video::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(1,1,1,0.8);
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    display: flex;
    flex-direction: column;
    z-index: 9;

    p {
      font-size: 6vw;
      color: rgba(255,255,255,0.8);
      color: #ffffff;
      width: 100%;
      text-align: center;
      line-height: 8vw;
    }
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #09090B;
  min-height: 100vh;

  .wrapper {
    width: 100%;
    max-width: 1440px;
  }
`;


export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #09090B;
  padding: 120px 32px;
  width: 100%;

  .wrapper {
    width: 100%;
    max-width: 1440px;

    h2 {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`;

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .skill {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px;
    border: 1px solid #ffffff;
    padding: 32px;
    gap: 16px;

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      text-align: center;
      width: 100%;
    }

    span {
      width: 32%;
  
      img {
        height: 100%;
        width: 100%;
        aspect-ratio: 1;
      }
    }
  }
`;

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 128px 32px;
  width: 100%;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1440px;

    h2 {
      width: 100%;
      font-size: 6vw;
      text-align: center;
      margin-bottom: 140px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    a {
      text-decoration: none;
      color: #ffffff;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      font-size: 40px;

      @media (max-width: 800px) {
        font-size: 32px;
      }
    }
  }
`;