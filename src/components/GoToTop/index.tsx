import { ArrowUp } from "phosphor-react";
import { GoToTopContainer } from "./styles";

export function GoToTop() {
  function goTop() {
    window.scrollTo(0,0)    
  }
  return (
    <GoToTopContainer onClick={goTop}>
      <ArrowUp size={20} color="#ffffff" weight="bold" />
    </GoToTopContainer>
  )  
}