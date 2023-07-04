import { styled } from "styled-components"

export const Footer = () => {
  return (
    <FooterContainer>
      <Link href="">Termos de uso</Link>
      <Link href="">Política de Privacidade</Link>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  
  width: 100%;
  min-height: var(--Header-Height);
  max-height: var(--Header-Height);
`
const Link = styled.a`
  font-size: 0.75em;
  font-weight: 600;
  color: ${props => props.theme.color03};
`