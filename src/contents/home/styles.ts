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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;


  .title {
    display: flex;
    flex-direction: column;

    p {
      font-size: 6vw;
      color: rgba(255,255,255,0.8);
      width: 100%;
      text-align: center;
      line-height: 8vw;
    }
  }
`

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 32px;
  
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
    border: 1px solid rgba(255,255,255,0.8);
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
`