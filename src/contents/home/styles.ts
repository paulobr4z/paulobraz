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
`;

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

      background: #FF416C;
      background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
      background: linear-gradient(to right, #FF4B2B, #FF416C);

      background: #8A2387;
      background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);
      background: linear-gradient(to right, #F27121, #E94057, #8A2387);

      background: #59C173;
      background: -webkit-linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
      background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #09090B;
  padding: 120px 32px;

  @media (max-width: 800px) {
    padding: 120px 16px;
  }

  .projects-title {
    width: 100%;
    max-width: 1440px;
    margin-bottom: 40px;

    h2 {
      display: inline;
      font-size: 32px;
      background: #8A2387;
      background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);
      background: linear-gradient(to right, #F27121, #E94057, #8A2387);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    gap: 8px;

    @media (max-width: 1160px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .project {
      position: relative;
      border: 2px solid #ffffff;
      border-radius: 8px;
      padding: 2px;
      height: 100%;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
        aspect-ratio: 16/9;
      }

      .hover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(1,1,1,0.8);
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 32px;
        border-radius: 8px;
        opacity: 0;
        transition: all 0.2s ease;
        cursor: pointer;
      }

      .hover:hover {
        opacity: 1;
      }

      .hover span {
        display: flex;
        gap: 8px;
      }

      .hover h3 {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
      }

      .hover a {
        color: #ffffff;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
      }

      .hover a:hover {
        text-decoration: underline;
      }

      .hover p {
        font-family: "Poppins", sans-serif;
      }
    }
  }
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 120px 32px;

  @media (max-width: 800px) {
    padding: 120px 16px;
  }

  .wrapper {
    width: 100%;
    max-width: 1440px;

    h2 {
      display: inline;
      font-size: 32px;

      background: #8A2387;
      background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);
      background: linear-gradient(to right, #F27121, #E94057, #8A2387);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .experiences {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      gap: 32px;

      span {
        padding: 40px;
        background-color: #09090B;
        border-radius: 16px;
        border: 1px solid #ffffff;
        width: 100%;
        gap: 16px;

        @media (max-width: 800px) {
          padding: 32px;
        }

        h3, h4, li, p {
          font-family: "Poppins", sans-serif;
        }

        h3 {
          margin-bottom: 8px;
        }

        h4 {
          margin-bottom: 8px;
        }
      }

      span:nth-child(1) {
        margin-top: 40px;
      }
    }
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

  @media (max-width: 800px) {
    padding: 120px 16px;
  }

  .wrapper {
    width: 100%;
    max-width: 1440px;

    h2 {
      font-size: 32px;
      display: inline;

      background: #8A2387;
      background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);
      background: linear-gradient(to right, #F27121, #E94057, #8A2387);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 40px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    gap: 16px;
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
    background-color: #040405;

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

      background: #59C173;
      background: -webkit-linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
      background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
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